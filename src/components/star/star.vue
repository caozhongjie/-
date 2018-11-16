<template>
      <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="start-item"></span>
      </div>
</template>

<script>
  const  LENGTH = 5;
  const  CLS_ON = 'on';
  const  CLS_HALF = 'half';
  const  CLS_OFF = 'off';
  export default {
      data(){
        return{

        }
      },
    computed:{
      starType(){
        return 'star-'+this.size
      },
      itemClasses(){
          let result = [];
          let score = Math.floor(parseInt(this.score)*2)/2;
          let hasDecimal  = score % 1 !==0;//判断是否有小数
          let integer  = Math.floor(score);
          for(let i=0;i<integer;i++){
              result.push(CLS_ON);
          }
          if(hasDecimal){
            result.push(CLS_HALF)
          }
          while (result.length<LENGTH){
            result.push(CLS_OFF)
          }
          return  result;
      }
    },
    props:["size","score"]
  }
</script>

<style scoped>
  .start-item{
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 22px;
    text-align: center;
  }
  .star :last-child{
    margin-right: 0;
  }
  .on{
    background-image: url("./star48_on@2x.png");
  }
  .half{
    background-image: url("./star48_half@2x.png");
  }
  .off{
    background-image: url("./star48_off@2x.png");
  }
</style>
