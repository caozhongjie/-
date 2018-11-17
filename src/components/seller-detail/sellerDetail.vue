<template>
  <div>
    <div class="content">
      <h1 class="title">商家实景</h1>
      <div class="sellerImg">
        <img v-for="(item,index) in seller.pics" :src="item" alt="" :key="index">
      </div>
      <div class="wrapper">
          <h1 class="title">商家信息</h1>
          <p v-for="(item,index) in seller.infos" :key="index" class="info">
            {{item}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "seller-detail",
    props: ['seller']

  }
</script>

<style scoped lang="stylus">
  .content
    padding 18px 0 18px 18px
    .title
      padding-bottom 12px
      font-weight bolder
      margin-bottom 12px
      border-bottom 1px solid #f0f0f0
    .sellerImg
      img
        width 120px
        height 90
        margin-right 6px
        margin-bottom 12px


  .wrapper
    margin-top 18px
    border-top 1px solid #f0f0f0
    padding 18px
    .info
      margin-top 12px
      padding 16px 12px
      font-size 12px
      font-weight 100
      color rgb(7,17,27)
      line-height 16px
      border-bottom  1px solid #f0f0f0

</style>
