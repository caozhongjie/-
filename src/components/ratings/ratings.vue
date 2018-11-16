<template>
    <div class="ratings" >
      <general-rateing></general-rateing>
      <rating-select></rating-select>
      <all-ratings></all-ratings>
    </div>
</template>

<script>
  import generalRateing from  '../generalRateing/generalRateing'
  import ratingselect from  '../ratingselect/ratingselect'
  import allratings from  '../ratingList/allRatings'
export default {
  name:"seller-ratings",
  components:{
    'general-rateing':generalRateing,
    'rating-select':ratingselect,
    'all-ratings':allratings
  },
}
</script>

<style scoped lang="stylus">

</style>
