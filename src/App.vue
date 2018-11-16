<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
  <div class="tab-item">
    <router-link to="/goods" :seller="seller" class="tab-item-goods tab-common">商品</router-link>
  </div>
  <div class="tab-item">
    <router-link to="/ratings" class="tab-item-ratings tab-common">评价</router-link>
  </div>
  <div class="tab-item">
    <div class="tab-item" >
      <router-link to="/seller" :seller="seller" class="tab-item-seller tab-common">商家</router-link></div>
  </div>
    </div>
    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>

  </div>
</template>

<script>
import header from './components/header/header.vue'



export default {
  data () {
    return{
      seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller').then((response)=>{
      if(response.body.errno==0){
        this.seller = response.body.data;
        console.log(1111111111)
        console.log(this.seller)
      }

    },(error)=>{
      console.log(error)
    })

  },
  components: {
    'v-header': header
  }
}
</script>

<style>
#app
  .tab{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 0.5px solid rgba(7,17,27,0.1);
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-common{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .tab-item-goods{

  }
  .tab-item-ratings{

  }
  .tab-item-seller{

  }
  .router-link-active{
    color: rgb(240,20,20);
  }
</style>
