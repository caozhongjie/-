<template>
  <transition name="fooddeploy">
      <div class="food" v-show="showFlag" ref="betterscroll">
            <div class="food-content" >
              <div class="image-header">
                <img :src="food.image" alt="" >
               <div class="back" @click="hide()">
                 <i class="icon-arrow_lift"></i>
               </div>
              </div>
              <div class="content">
                <h1 class="title">{{food.name}}</h1>
                <div class="detail">
                  <span class="sell-count">月售{{food.sellCount}}</span>
                  <span class="rating">好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="newPrice">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" ></cartcontrol>
                </div>
                <div class="buy" @click.stop.prevent="addFirst($event)" v-show="!food.count || food.count===0">加入购物车</div>
              </div>
              <split v-show="food.info"></split>
              <div class="info" v-show="food.info">
                <h1 class="goods-info">商品介绍</h1>
                <p class="text" >{{food.info}}</p>
              </div>
              <split></split>
              <div class="rating">
                <h1 class="goods-rating" >商品评价</h1>
                <ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
              </div>

              <!--<div class="rating-wrapper">-->
                  <!--<ul v-show="food.ratings && food.ratings.length">-->
                    <!--<li v-for="rating in food.ratings">-->
                      <!--<div class="user">-->
                        <!--<span class="username">{{rating.username}}</span>-->
                        <!--&lt;!&ndash;<img :src="rating.avatar" alt="" class="avatar" width="12" height="12">&ndash;&gt;-->
                      <!--</div>-->
                      <!--<div class="time">{{rating.rateTime}}</div>-->
                      <!--<p class="userText">-->
                        <!--<span :class="{-->
                        <!--'icon-thumb_down':rating.rateType===1,-->
                        <!--}"></span>{{rating.text}}-->
                      <!--</p>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--<div class="no-rating" v-show="!food.ratings || !food.ratings.length"></div>-->
              <!--</div>-->
            </div>
      </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll';
  import Vue from 'vue';
  import cartcontrol from  '../cartcontrol/cartcontrol.vue';
  import split from  '../split/split.vue';
  import ratingselect from  '../ratingselect/ratingselect.vue';
  const POSITIVE = 0;
  const NEGATIVE = 0;
  const ALL = 0;
    export default {
      data(){
        return{
          showFlag:false,
          selectType:ALL,
          onlyContent:true,
          desc:{
            all:"全部",
            positive:'推荐',
            negative:"吐槽"
          }
        }
      },
        props:{
          food:{
            type:Object
           }
        },
      created(){
        this.$nextTick(()=>{
          this._initScroll();
        })
      },
      methods:{
        show(){
          this.showFlag = true;
          this.selectType = 0;
          this.onlyContent = true;
        },
        hide(){
          this.showFlag = false;
          console.log(this.food)
        },
        addFirst(event){
          //防止电脑多次点击
          if(!event._constructed){
            return;
          }
          //可能值不存在   这样写可声明这个变量
          Vue.set(this.food,'count',1)
        },
        _initScroll(){
          this.betterscroll   = new BScroll(this.$refs.betterscroll,{
            click:true
          });
        }
      },
      components:{
        "cartcontrol":cartcontrol,
        "split":split,
        "ratingselect":ratingselect
      }
    }
</script>

<style scoped>
    .food{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 30;
      width: 100%;
      height: 100%;
      background: #fff;
    }
    .image-header{
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
    }
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  .back{
    position: absolute;
    top: 10px;
    left: 0;
  }
  .icon-arrow_lift{
    display: block;
    padding: 10px;
    font-size: 20px;
    color: white;
  }
  .content{
    padding: 18px;
    position: relative;
  }
  .title{
    font-size: 14px;
    color: rgb(7,17,27);
    line-height: 14px;
    font-weight: 700;
    margin: 8px 0 18px 0;
  }
  .detail{
    margin-bottom: 18px;
    line-height: 10px;
    font-size: 0;
  }
  .sell-count,.rating{
    font-size: 10px;
    color: rgb(147,153,159);
  }
  .sell-count{
      margin-right: 12px;
    }
  .price{
    font-weight: 700;
    line-height: 24px;
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
  .cartcontrol-wrapper{
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
  .buy{
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 10;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    color: white;
    background: rgb(0,160,220);
  }
  .info{
    padding: 18px;
  }
  .goods-info{
    line-height: 14px;
    margin-bottom: 6px;
    font-size: 14px;
    color: rgb(7,17,27);
  }
  .text{
    padding: 0 8px;
    line-height: 24px;
    font-size: 12px;
    color: rgb(77,85,93);
  }
  .rating{
    padding-top:18px ;
  }
  .goods-rating{
    line-height: 14px;
    margin-bottom: 6px;
    font-size: 14px;
    color: rgb(7,17,27);
    margin-left: 18px;
  }
</style>
