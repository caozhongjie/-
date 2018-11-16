<template>
    <div class="goods">
      <div class="menu-wrapper"   ref="menuwrapper">
        <ul>
          <li v-for="(item,index)  in goods"  class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
            <span class="text">
             <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span> {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper"  ref="foodswrapper">
        <ul>
          <li v-for="item in goods" class="foods-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item" @click="hasselectedFood(food,$event)">
                <div class="food-icon">
                  <img width="57" height="57" v-bind:src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="newPrice">￥{{food.price}}</span>
                    <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" ></shopcart>
      <div>
          <food  :food="selectedFood" ref="food"></food>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import shopcart from '../shopcart/shopcart.vue';
  import cartcontrol from  '../cartcontrol/cartcontrol.vue'
  import food from  '../food/food.vue'

export default {
  data(){
    return{
        goods:[],
      //每个区块的高度
      listHeight:[],
      scrollY:0,
      selectedFood:{}
    }
  },
  computed:{
    currentIndex(){
      for(let i=0;i<this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1];
        if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
          return i ;
        }
      }
      return 0;
    },
    selectFoods(){
      let foods=[];
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
              if(food.count){
                foods.push(food);
              }
        })
      })
          return foods
    }

  },
  components:{
    'shopcart':shopcart,
    'cartcontrol':cartcontrol,
    'food':food
  },
  props:["seller"],
  created(){
      this.classMap=['decrease','discount','special','invoice','guarantee'];
        this.$http.get('/api/goods').then((response)=>{
          response = response.body;
          console.log(response)
          if(response.errno==0){
            this.goods  =response.data;
            //让dom渲染完成再执行
            this.$nextTick(()=>{
              this._initScroll();
              this._calculateHeight();
            })
          }
        },(error)=>{

        })
  },
  methods:{
    _initScroll(){
      //BScroll中有两个参数，第一个数dom节点,在节点位置写上v-el:menu-wrapper下面写法即可获取
      this.meunScroll   = new BScroll(this.$refs.menuwrapper,{
        click:true
      });
      this.foodsScroll  =  new BScroll(this.$refs.foodswrapper,{
        click:true,
        probeType:3
      });
      //监听屏幕滚动的值  并将当前的Y值赋给scrolly
      this.foodsScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y));
      })
    },
    _calculateHeight(){
      let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
      let height   = 0;
      this.listHeight.push(height);
      for(let i=0;i<foodList.length;i++){
        let item  = foodList[i];
        height+=item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index,event){
      //使用$evevt将事件传下来，使用下面这个为了让浏览器上也能起作用，因为浏览器是没有event._constructed这个属性的
      if(!event._constructed){
        return;
      }
      let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el,300)
    },
    hasselectedFood(food,event){
      if(!event._constructed){
        return;
      }
      this.selectedFood = food;
      this.$refs.food.show();
    }
  }
}
</script>

<style scoped>
    .goods{
      display: flex;
      position: absolute;
      top: 186px;
      bottom: 46px;
      width: 100%;
      overflow: hidden;
    }
  .menu-wrapper{
    /*让左侧大小不变*/
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .foods-wrapper{
    flex: 1;
  }
  .menu-item{
    /*下面这个属性是为了让多行时也能垂直居中*/
    display: table;
    height: 54px;
    width: 80px;
    line-height: 14px;
    padding: 0 12px;
  }
  .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .decrease{
    background-image: url("./decrease_3@2x.png");
  }
    .discount{
      background-image:url("./discount_3@2x.png");
    }
    .special{
      background-image:url("./special_3@2x.png");
    }
    .invoice{
      background-image:url("./invoice_3@2x.png");
    }
    .guarantee{
      background-image:url("./guarantee_3@2x.png");
    }
  .text{
    font-size: 12px;
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color:rgb(147,153,159);
    background: #f3f5f7;
  }
  .food-item{
    display: flex;
    margin: 18px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
    .food-item:last-child{
      margin-bottom: 0;
    }
  .food-icon{
      flex: 0 0 57px;
      margin-right: 10px;
  }
  .content{
    position: relative;
    flex: 1;
  }
  .name{
    font-size: 14px;
    color: rgb(7,17,27);
    line-height: 14px;
    margin: 2px 0 8px 0;
  }
  .desc,.extra{
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 10px;
  }
  .desc{
    line-height: 12px;
  }
  .extra{
    margin: 8px 18px 8px 0;
  }
  .count{
    margin-right: 12px;
  }
  .newPrice{
    font-size: 14px;
    color: rgb(240,20,20);
    font-weight: 700;
    line-height: 24px;
    margin: 0 8px 18px 0;
  }
  .oldPrice{
    font-size: 10px;
    color: rgb(147,153,159);
    font-weight: 700;
    line-height: 20px;
    text-decoration:line-through
  }
  .current{
    position: relative;
    margin-top: -1px;
    z-index: 10;
    background: #fff;
    font-weight: 900;
    }
  .current .text{
    border: none;
  }
  .cartcontrol-wrapper{
    position: absolute;
    right: 0;
    bottom: 0px;
  }
</style>
