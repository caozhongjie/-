<template>
    <div class="content">
      <h2 class="title">公告与活动</h2>
      <p class="detail">{{seller.bulletin}}</p>
    </div>
</template>

<script>
    export default {
        name: "bulletin-board",
      props:['seller']
    }
</script>

<style scoped lang="stylus">
  .content
    margin-top 18px
    border-bottom 1px solid #f0f0f0
    border-top 1px solid #f0f0f0
    padding 18px 12px 16px 18px
    background whitesmoke
    .title
      font-weight bold
      margin-bottom 8px
    .detail
      padding-left  12px
      font-size 12px
      font-weight 100
      color rgb(240,20,20)
      line-height 24px




</style>
