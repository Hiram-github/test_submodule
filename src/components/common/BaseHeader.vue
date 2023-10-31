<template>
  <header class="header">
    <div class="header-left"  >
      <i class="menu" v-if="$route.path.indexOf('home')!=-1" @click="showMenu()"/>
      <i class="back" v-else @click="back()"/>
    </div>
    <div class="header-center">{{headerTitle}}</div>
    <div class="header-right">
    </div>
  </header>
</template>
<script>
  import storage from "@/assets/js/util/storage.js";//localStorage sessionStorage 存储
  export default {
    name: 'BaseHeader',
    data(){
      return {
        examInfo:{
          exam_paper:{}
        }
      }
    },
    props:{
      headerTitle:{
        type:String,
        required:true
      },
      returnName:{
        type:String,
        required:true
      }
    },
    mounted(){
      const self=this
      let examInfo=storage.sessionStorage.getItem("examInfo")
      if(examInfo){
        self.examInfo=examInfo
      }
      self.setBaseHeaderInfo()
    },
    methods: {
      /**
       *  @Description: 返回上一个界面
       *  @Author: ykl
       */
       back: function(){
        const self=this
        if(self.$route.path.indexOf("exam-over")!=-1){
          self.$router.push({path: '/exam-index'})
          return
        }
        if(self.$route.path.indexOf("exam-index")!=-1){
          self.$router.push({path: '/home'})
          return;
        }
        self.$router.back()
      // dthis.$router.replace({name: this.returnName})
    },

      /**
       *  @Description: 显示菜单
       *  @Author: ykl
       */
       showMenu(){
         this.$emit('showMenu');
       },
      /**
       *  @Description: 设置基本头部信息
       *  @Author: ykl
       */
       setBaseHeaderInfo(){
         const self=this
         let userInfo = storage.localStorage.getLoginUserInfo()
         if(!userInfo)
          return
         let enterprise=userInfo.enterprise//公司名
         if(!enterprise)//公司名
          return
        let headerTitle=self.headerTitle.replace(/^\s+|\s+$/g,"");
        if(headerTitle==""||headerTitle=="深圳市天盈隆科技有限公司")
          self.headerTitle=enterprise

      },
      /**
       *  @Description: 获取考试状态
       *  @Author: ykl
       */
       getExamStatus(){
        const self=this
        let url = "exam/online/query_person_online_status"
        let requestData = {
         exam_plan_id: self.examInfo.id,
         exam_paper_id: self.examInfo.exam_paper.id
       }
       self.$http.post(url, requestData).then(res => {
        if(res.code!=200)
          // self.$router.go()
        self.$router.push({path: '/exam-index'})
      })
     },
   }
 }
</script>
<style lang="scss" scoped>
.header{
  width:100%;
  height: .82rem;
  position:fixed;
  top:0;
  left:0;
  z-index:500;
  box-sizing: border-box;
  background: #3284f8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-left{
  position: relative;
  left:.33rem;
  width: .48rem;
  height: .48rem;
  i{
   width: .48rem;
   height: .48rem;
 }
 .back{
  position: absolute;
  background: url('/static/images/oa-mobile/home/top_icon_back1.png') no-repeat;
  background-size: contain;
}
.menu{
  position: absolute;
  background: url('/static/images/oa-mobile/menu.png') no-repeat;
  background-size: contain;
}
}
.header-center{
  flex: 1;
  font-size: .32rem;
  line-height: .48rem;
  color: #fff;
  text-align: center;
}
.header-right{
 position: absolute;
 width: .48rem;
 height: .48rem;
 /* background: url('/static/images/web/top_icon_back2.png') no-repeat;*/
 background-size: contain;
}
</style>
