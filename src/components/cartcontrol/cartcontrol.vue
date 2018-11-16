<template>
      <div class="cartcontrol">
        <transition name="fade">
        <div  class="cart-decrease " v-show="food.count>0"  @click.stop.prevent="descreaseCart($event)">
          <span class="inner icon-remove_circle_outline"></span>
        </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
      </div>
</template>

<script>
  import  Vue from 'vue'
    export default {
        data(){
          return{

          }
        },
      props:{
          food:{
            type:Object
          }
      },
      created(){

      },
     methods:{
       addCart(event){
         if(!event._constructed){
           return;
         }
         if(!this.food.count){
          Vue.set(this.food,'count',1);
         }else{
           this.food.count+=1;
         }
       },
       descreaseCart(event){
         if(!event._constructed){
           return;
         }
         if(this.food.count){
           this.food.count-=1;
         }

       },

     }
    }
</script>

<style scoped>
  .cartcontrol{

  }
  .cart-decrease{
    display: inline-block;
    padding: 6px;
    trasition:all 0.4s linear
  }
  .inner{
    font-size: 24px;
    line-height: 24px;
    color: rgb(0,160,220);
  }

  .cart-count{
    display: inline-block;
    font-size: 10px;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    color: rgb(147,153,159);

  }
  .cart-add{
    display: inline-block;
    line-height: 24px;
    font-size: 24px;
    padding: 6px;
    color: rgb(0,160,220);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s linear;
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate3d(24px,0,0);
  }
</style>
