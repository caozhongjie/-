<template>
    <div class="seller">
      <seller-header :seller="seller"></seller-header>
    </div>
</template>

<script>
  import sellerheader from '../seller-header/seller-header'
export default {
    name:"seller",
    components:{
      'seller-header':sellerheader
    },
  props:['seller']

}
</script>

<style scoped>

</style>
