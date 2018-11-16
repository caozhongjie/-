<template>
<div class="header">
  <div class="content-wrapper">
  <div class="avatar" >
    <img :src="seller.avatar" >
  </div>
  <div class="content">
      <div class="title">
        <span class="brand" style="vertical-align: top"><img src="./brand@2x.png" alt="" width="30px" height="18px"> </span>
        <span  class="name" style="vertical-align: top">{{seller.name}}</span>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
    <div v-if="seller.supports" class="activity">
      <span class="icon"><img src="./decrease_1@2x.png" alt=""> </span>
      <span class="text">{{seller.supports[0].description}}</span>
      <span v-if="seller.supports" class="supports" @click="showdetail()">{{seller.supports.length}}个&nbsp;> </span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
  </div>
  <div class="bulletin-wrapper" @click="showdetail()">
        <span class="bulletin-title"><img src="./bulletin@2x.png" style="width: 22px;height: 12px"> </span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
  </div>
  <div v-show="detailShow" class="detail"  >
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
         <div class="detail-name">{{seller.name}}</div>
          <div class="star"><v-star :score="seller.score" :size="48"></v-star></div>
         <div class="detail-title">
           <div class="line"></div>
           <div class="detail-text">优惠活动</div>
           <div class="line"></div>
         </div>
          <ul v-if="seller.supports">
            <li class="supports-item" v-for="item in seller.supports">
              <span >{{item.description}}</span>
            </li>
          </ul>
          <div class="detail-title">
            <div class="line"></div>
            <div class="detail-text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="detail-description">
            {{seller.bulletin }}
          </div>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail()">X</div>
  </div>
</div>
</template>

<script>
  import star from '../star/star.vue'
export default{
   data(){
     return{
       detailShow:false
     }
   },
  methods:{
    showdetail(){
        this.detailShow=true;
    },
    closeDetail(){
      this.detailShow=false;
    }
  },
  components:{
    'v-star' :star
  },
    props:["seller"]
}

</script>

<style scoped>
  .header{
    position: relative;
    z-index: 1;
  }
  .content-wrapper{
    padding: 24px 12px 18px 24px;
    background-color: rgba(7,17,27,0.5);
  }
  .avatar{
      display: inline-block;
      vertical-align: top;

    }
  .avatar img{
    width: 64px;
    height: 64px;
    border-radius: 2px;
  }
  .content{
    display: inline-block;
    margin-left: 16px;
  }
  .title{

    margin-top: 2px;
    margin-bottom: 8px;
  }
  .name{
      font-size: 16px;
      color: rgb(255,255,255);
      font-weight: bold;
      line-height: 18px;
      margin-left: 6px;
  }
  .description{
    font-size: 12px;

    color: rgb(255,255,255);
    font-weight: 100;
    line-height: 12px;
    margin-bottom: 10px;
  }
  .activity{
    margin-bottom: 2px;
  }
  .icon{
    vertical-align: center;
  }
  .text{
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 100;
    line-height: 12px;

    vertical-align: center;
  }
  .supports{
    display: inline-block;
    width: 40px;
    height: 24px;
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 100;
    line-height: 24px;
    border-radius: 7px 7px 7px 7px;
    background-color: rgba(0,0,0,0.2);
    text-align: center;
    position: relative;
    left: 80px;
  }
  .icon-keyboard_arrow_right{
   position: relative;
    left: 120px;
    color: white;
  }
  .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    background-color: rgba(7,17,27,0.2);
  }
  .bulletin-title{
    margin-right: 4px;
  }
  .bulletin-text{
    font-size: 10px;
    color: rgb(255,255,255);
    line-height: 28px;
    font-weight: 100;
    display: inline-block;
    margin-right: 12px;
  }
  .detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    /*让背景模糊*/
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(7,7,7,0.8);
    top: 0px;
  }


  .clearfix{
    display: inline-block;
  }
  .clearfix:after{
    display: block;
    content: ".";
    height: 0;
    line-height: 0;
    clear:both;
    visibility: hidden;
  }
  .detail-wrapper{
    /*和屏幕一样高*/
    min-height: 100%;
    width: 100%;
  }
  .detail-main{
    margin-top: 64px;
    padding-bottom: 64px ;
  }
  .detail-name{
    text-align: center;
    font-size: 16px;
    color: rgb(255,255,255);
    font-weight: bold;
  }
  .star{
    text-align: center;
    height: 24px;
    margin-top: 16px;
    margin-bottom: 28px;
  }


  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    font-size: 32px;
    clear: both;
  }
  .detail-title{

      width: 80%;
      margin:0 auto 24px auto;
      display: flex;
  }
  .line{
    flex: 1;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    position: relative;
    bottom: 6px;
  }
  .detail-text{
    text-align: center;
    flex: 1;
    padding-left: 12px;
    padding-right: 12px;
    color: rgb(255,255,255);
    font-size: 16px;
    font-weight: bold;
  }
  .supports-item{
    margin: 24px auto 28px 50px;
  }
  .supports-item span{
    font-size: 12px;
    font-weight: 100;
    color: rgb(255,255,255);
    line-height: 12px;
  }
  .detail-description{
      margin: 0 auto;
      width: 80%;
      font-size: 12px;
      font-weight: 100;
      color: rgb(255,255,255);
      line-height: 24px;
  }
</style>
