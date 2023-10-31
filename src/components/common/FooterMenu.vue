<template>
 <footer class="bottom-menu">
  <nav class="nav">
    <router-link class="bottom-menu-btn"  v-for="(item, index) in menus" :to=item.link :key="index" @click=changeMenuIcon(index)>
      <img :src='item.isSelect?item.highlightIcon:item.icon'>
      <h6 :class="[item.isSelect?'active':'']">{{item.name}}</h6>
    </router-link>
  </nav>
</footer>
</template>
<script>
  export default {
    name: 'BaseHeader',
    data(){
      return {
        menus:[
        {name:"工作台",icon:"/static/images/oa-mobile/home/zhiji_footicon1_1.png",highlightIcon:"/static/images/oa-mobile/home/zhiji_footicon1_2.png",isSelect:false,link:'/home'},
        {name:"消息",icon:"/static/images/oa-mobile/home/zhiji_footicon2_1.png",highlightIcon:"/static/images/oa-mobile/home/zhiji_footicon2_2.png",isSelect:false,link:'/message'},
        {name:"通讯录",icon:"/static/images/oa-mobile/home/zhiji_footicon3_1.png",highlightIcon:"/static/images/oa-mobile/home/zhiji_footicon3_2.png",isSelect:false,link:'/contacts'},
        {name:"我",icon:"/static/images/oa-mobile/home/zhiji_footicon4_1.png",highlightIcon:"/static/images/oa-mobile/home/zhiji_footicon4_2.png",isSelect:false,link:'/personal-center'}
        ]
      }
    },
    created:function(){
      const self=this
      let currentPath=self.$route.path
      self.menus.forEach((item)=>{
        if(currentPath.indexOf(item.link)!=-1)
          item.isSelect=true
      })
    },
    methods:{
      changeMenuIcon:function(index){
        const self=this
        let menusObj=self.menus[index]
        for(let i=0;i<self.menus.length;i++){
          let menusObj=self.menus[i]
          if(i==index&&menusObj.isSelect){
            continue
          }else if(i==index){
            menusObj.isSelect=true
          }else if(menusObj.isSelect){
            menusObj.isSelect=false
          }
          menusObj.icon=[menusObj.highlightIcon,menusObj.highlightIcon=menusObj.icon][0]
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.bottom-menu{
  width:100%;
  height:1rem;
  position:fixed;
  bottom:0;
  left:0;
  z-index:500;
  background-color:#ffffff;
  border-top:.01rem #BFBFBF solid;
  .nav{
    display:flex;
    justify-content: space-around;
    .bottom-menu-btn{
      display:flex;
      flex-direction: column;
      align-items: center;
      img{
        width:.43rem;
        height: .43rem;
        margin-top:.10rem;
      }
      h6{
        text-align:center;
        margin-top:.10rem;
        font-size:.22rem;
        color:#BFBFBF;
      }
      .active{
       color:#3689FE;
     }
   }
 }
}
</style>
