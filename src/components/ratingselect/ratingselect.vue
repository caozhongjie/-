<template>
    <div class="ratingselect">
          <div class="rating-type">
            <span class="block positive" :class="{'active':selectType===2}">{{desc.all}}      <span class="count">47</span></span>
            <span class="block positive" :class="{'active':selectType===0}">{{desc.positive}} <span class="count">50</span></span>
            <span class="block negative" :class="{'active':selectType===1}">{{desc.negative}} <span class="count">7</span></span>
          </div>
          <div class="switch" >
            <span @click="showNomessage" class="icon-check_circle" :class="{'on':onlyContent}"></span>
            <span class="text" v-show="NOmessage">看全部评价</span>
            <span class="text" v-show="!NOmessage">只看有内容的评价</span>
          </div>
          <ratings-list :ratingsList="hasNoMessage"></ratings-list>
    </div>

</template>

<script>
  import ratingList from '../ratingList/ratingsList.vue'
  const POSITIVE = 0;
  const NEGATIVE = 0;
  const ALL = 0;
    export default {
      name: "ratingsSelect",
      data(){
        return{
          hasNoMessage:[],
          NOmessage:true
        }
      },
     props:{
          ratings:{
            type:Array,
            default(){
              return [];
            }
          },
          selectType:{
              type:Number,
            default:ALL
          },
          //判断是否只看有评价的
          onlyContent:{
            type:Boolean,
            default:false
          },
          desc:{
            type:Object,
            default(){
              return{
                all:'全部',
                positive:'满意',
                negative:'不满意'
              }
            }
          }
        },
     watch:{
       ratings:function () {
        this.hasNoMessage = this.ratings;
       }

      },
      computed:{

      },
      components:{
          'ratings-list':ratingList
      },
      methods:{
        showNomessage:function () {
          this.NOmessage= !this.NOmessage;
          if(this.NOmessage){
            this.hasNoMessage =this.ratings
          }else{
            let arr =[]
            for(var i= 0;i<this.hasNoMessage.length;i++){
              if(this.hasNoMessage[i].text){
               arr.push(this.hasNoMessage[i])
              }
            }
            this.hasNoMessage=arr;
          }
        }
      }
    }
</script>

<style scoped>
  .rating-type{
    padding:18px 0 ;
    margin: 0 18px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    font-size: 0;
  }
  .block{
    display: inline-block;
    padding: 8px 12px;
    margin-right: 8px;
    border-radius: 1px;
    color: white;
    font-size: 12px;
    color: rgb(77,85,93);
    line-height: 16px;
  }
  .count{
    font-size: 8px;
    margin-left: 2px;
  }
  .positive{
    background: rgba(0,160,220,0.2);
  }
  .negative{
    background: rgba(77,85,93,0.2);
  }
  .active{
      color: #fff;
  }
  .positive,.active{
    background: rgb(0,160,220);
  }
  .negative{
    /*background:rgb(77,85,93) ;*/
  }
  .switch{
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    color: rgb(147,153,159);
    font-size: 0;
  }
  .icon-check_circle{
    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
    font-size: 24px;
  }
  .text{
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
  }
  .on{
    color: #00c850;
  }
  .showAir{
    height: 200px;
  }
</style>
