<template>
    <div class="general">
      <div class="general-left">
        <h3 class="general-left-score">3.9</h3>
        <p class="general-title">综合评分</p>
        <p class="compare-other">高于周边商家69.2%</p>
      </div>
      <div class="general-right">
        <div>
          <span class="service-attitude">服务态度</span>
          <span class="service-score">评分数</span>
          <span class="service-detail">3.9</span>
        </div>
        <div>
          <span class="service-attitude service-show-space">服务质量</span>
          <span class="service-score">评分数</span>
          <span class="service-detail">4.0</span>
        </div>
        <div>
          <span class="service-attitude">送达时间</span>
          <span class="service-time">44分钟</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "general-rateing"
    }
</script>

<style scoped lang="stylus">
  .general
    border-bottom  0.5px solid #F0F0F0
    padding 18px 24px
    display flex
    .general-left
      flex 1
      text-align center
      padding-right 48px
      .general-left-score
        font-size 24px
        color rgb(255,153,0)
        line-height 28px
        margin-bottom 6px
      .general-title
        font-size 12px
        color rgb(7,17,27)
        line-height 12px
        margin-bottom 8px
      .compare-other
        font-size 10px
        color rgb(7,17,27)
        line-height 10px
    .general-right
      div
        margin-bottom 4px
        .service-attitude
          font-size 12px
          color rgb(7,17,27)
          line-height 18px
          margin-right 12px
        .service-detail
          font-size 12px
          color rgb(255,153,0)
          line-height 18px
        .service-time
          font-size 12px
          color rgb(147,153,159)
          line-height 18px














</style>
