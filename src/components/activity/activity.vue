<template>
    <div>
      <p class="activityInfo" v-for="item in seller.supports">
        <span :class="'type_'+item.type" class="bgicon"></span>
        <span class="info">{{item.description}}</span>
      </p>
    </div>
</template>

<script>
    export default {
        name: "activity",
      props:['seller'],
      data(){
          return{
            activityInfo:{}
          }
      }

    }
</script>

<style scoped lang="stylus">
  .activityInfo
    padding 16px 24px
    border 1px  solid #f0f0f0
    .bgicon
      display inline-block
      width 24px
      height 24px
      position relative
      top 8px
    .info
      font-size 12px
      font-weight 100
      color rgb(7,17,27)
      line-height 16px
    .type_0
      background url("./img/discount_1@2x.png")
    .type_1
      background url("./img/decrease_3@2x.png")
    .type_2
      background url("./img/decrease_1@2x.png")
    .type_3
      background url("./img/discount_3@2x.png")
    .type_4
      background url("./img/guarantee_1@2x.png")
    .type_5
      background url("./img/invoice_1@2x.png")
    .type_6
      background url("./img/special_1@2x.png")
   .type_7
      background url("./img/special_3@2x.png")

</style>
