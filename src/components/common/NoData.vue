<template>
  <div id="noData">
    <img v-if="isShowImg" src="/static/images/oa-mobile/login_top_logo.png" width="100%" height="100%" />
    <h3>{{hint}}</h3>
  </div>
</template>
<script scope>
  export default {
    name: 'NoData',
    data(){
      return {
      }
    },
    props:{
      hint:{
        type:String,
        default:"暂无数据"
      },
      isShowImg:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
<style scoped lang="scss">
#noData{
  width:100%;
  height:100%;
  min-height:100%;
  background:#FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    display: block;
    height: 50%;
    width: 50%;
  }
  h3{
    font-size:0.3rem;
    color:#d2c9c9;
  }
}
</style>
