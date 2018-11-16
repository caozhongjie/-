<template>
  <div>
    <div class="content" v-for="(item,index) in ratings" :key="index">
      <div class="icon">
        <img class="iconimg" :src="item.avatar" alt="">
      </div>
      <div class="content-first">
        <p class="custom-id">{{item.username}}</p>
        <p class="rating-time">{{item.rateTime}}</p>
      </div>
      <div class="content-second">
        <span>评分{{item.score}}</span>
        <span class="endtime">{{item.deliveryTime}}分钟送达</span>
      </div>
      <div class="content-third">
        <p>{{item.text}}</p>
      </div>
      <div class="content-four">
        <span >点赞手势</span>
        <div class="bingo" v-for="(name,key) in item.recommend" :key="key">
          <span >{{name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "all-ratings",
      data(){
        return{
          ratings:[]
        }
      },
      created(){
        this.$http.get('/api/ratings').then((response)=>{
          if(response.body.errno==0){
            this.ratings = response.body.data;
          }
        },(error)=>{
          console.log(error)
        })
      },
    }
</script>

<style scoped lang="stylus">
  .content
    border-bottom  1px solid #f0f0f0
    position relative
    padding 18px 18px 18px 58px
    .icon
      position absolute
      left 12px
     .iconimg
        width 28px
        height 28px
        display block
        border-radius 14px
    .content-first
      display flex
      .custom-id
        flex 1
        font-size 10px
        color rgb(7,17,27)
        line-height 12px
      .rating-time
        font-size 10px
        font-weight 100
        color rgb(147,153,159)
        line-height 12px
    .content-second
      margin-top 4px
      .endtime
        font-size 10px
        font-weight 100
        color rgb(147,153,159)
        line-height 12px
    .content-third
      margin-top 6px
      font-size 10px
      color rgb(7,17,27)
      line-height 18px
    .content-four
      margin-top 8px
      .bingo
        display inline-block
        font-size 9px
        color rgb(147,153,159)
        line-height 16px
        border-width 1px
        border-color rgba(7,17,27,0.1)
        border-radius 1px
        line-height 16px
        border 1px solid #f0f0f0
</style>
