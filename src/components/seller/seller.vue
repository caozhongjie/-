<template>
    <div class="seller">
      <seller-header :seller="seller"></seller-header>
      <bulletin-board :seller="seller"></bulletin-board>
      <activity :seller="seller"></activity>
      <seller-detail :seller="seller"></seller-detail>
    </div>
</template>

<script>
  import sellerheader from '../seller-header/seller-header'
  import Bulletinboard from '../bulletin-board/Bulletin-board'
  import activity from '../activity/activity'
  import sellerDetail from '../seller-detail/sellerDetail'
export default {
    name:"seller",
    components:{
      'seller-header':sellerheader,
      'bulletin-board':Bulletinboard,
      'activity':activity,
      'seller-detail':sellerDetail,
    },
  props:['seller'],
  data(){
      return{
        selectFoods:[]
      }
  }

}
</script>

<style scoped>

</style>
