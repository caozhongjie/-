<template>
  <div >
    <div class="header-top">
      <div class="header-left">
        <h3>{{seller.name}}</h3>
        <div class="header-left-bottom">
          <div class="header-left-left">
            <v-star :size="24" :score="seller.score"></v-star>
          </div>
          <div class="header-left-right">
            <span>(661) 月售690单</span>
          </div>
        </div>
      </div>
      <div class="header-right">
        <p style="font-size: 24px;color: rgb(240,20,20);line-height: 24px">收藏</p>
        <p class="save">已收藏</p>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-left">
        <p class="title">起送价</p>
        <p class="num">{{seller.minPrice}}<span>元</span></p>
      </div>
      <div class="header-bottom-left">
        <p class="title">商家配送</p>
        <p class="num">{{seller.deliveryPrice}}<span>元</span></p>
      </div>
      <div class="header-bottom-left">
        <p class="title">平均配送时间</p>
        <p class="num">{{seller.deliveryTime}}<span>分钟</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/start-small'

  export default {
    name: "seller-header",
    props: ['seller'],
    components: {
      'v-star': star
    }

  }
</script>

<style scoped lang="stylus">
  @import "../../../static/css/variable.styl"
  .header-top
    border-bottom 1px solid $color
    padding 18px
    font-size 14px
    color rgb(7,17,27)
    line-height 14px
    display flex
    .header-left
      flex 1
      .header-left-bottom
        margin-top 8px
        div
          display inline-block
        .header-left-right
          margin-left 8px
          font-size 10px
          color rgb(77,85,93)
          line-height 18px
     .header-right
        .save
          text-align center
          font-size 10px
          color rgb(77,85,93)
          line-height 10px
          margin-top 4px
  .header-bottom
    padding 18px 24px
    border-bottom 1px solid $color
    div
      display inline-block
      width 31%
      text-align center
    .header-bottom-left
      .title
        font-size 10px
        color rgb(147,153,159)
        line-height 10px
        margin-bottom 4px
      .num
        font-size 24px
        font-weight 100
        color rgb(7,17,27)
        line-height 24px
        span
          font-size 12px




</style>
