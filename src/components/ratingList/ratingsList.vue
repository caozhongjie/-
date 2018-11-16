<template>
  <div class="content">
    <div class="rating-list" v-for="(item,index) in ratingsList" :key="index">
      <div class="rating-list-info">
        <div class="rating-list-info-time">{{item.rateTime}}</div>
        <div class="rating-list-info-custom">
          <span>{{item.username}}</span>
          <img class="custom-icon" :src="item.avatar" alt="">
        </div>
      </div>
      <div class="rating-list-rating">
        <span class="iconfont icon-dianzan"></span>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ratings-list",
    props: ['ratingsList']
  }
</script>

<style scoped lang="stylus">
  @import "../../../static/css/iconfont.css"
  .rating-list
    padding 16px 18px
    border-bottom 5px solid rgba(7, 17, 27, .0 .1)
    .rating-list-info
      display flex
      font-size 10px
      color rgb(147, 153, 159)
      line-height 12px
      .rating-list-info-time
        flex 1
        margin-bottom 6px
      .rating-list-info-custom
        .custom-icon
          width 12px
          height 12px
          margin-right 6px
    .rating-list-rating
      font-size 12px
      color rgb(7, 17, 27)
      line-height 16px
      .icon-dianzan
        font-size 12px
        color rgb(147, 153, 159)

</style>
