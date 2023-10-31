<template>
  <div class="not-ready-box">
    <div class="header">
      <div class="not-ready-tips">该功能开发中,请耐心等待...</div>
    </div>

    <div class="footer">
      <button class="rtn-btn" @click="click_return">返回</button>
    </div>

  </div>
</template>
<script>
  export default{
    name:"NotReadyView",
    data(){
      return {

      }
    },
    methods:{
      click_return(){
        this.$router.back()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .not-ready-box{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;

    .header{
      flex:1;
      font-size:0.3rem;

      .not-ready-tips{
        width:100%;
        height:1rem;
        text-align:center;
        /*margin-left:1rem;*/
        margin-top:5rem;
        color:#AEAEAE;
      }
    }
    .footer{
      flex:1;
      .rtn-btn{
        width:5.5rem;
        height:1rem;
        margin-left:1rem;
        background-color: #3183fd;
        color:#ffffff;
        border-radius:0.1rem;
      }
    }
  }
</style>
