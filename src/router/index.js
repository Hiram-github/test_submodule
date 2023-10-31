import Vue from 'vue'
import Router from 'vue-router'
import storage from "@/assets/js/util/storage.js";//localStorage sessionStorage 存储

Vue.use(Router)


const router = new Router({
  mode:"history",
  base:"/oa/",  
  routes:[]
})
router.beforeEach((to, from, next) => {
  /*let authorization = storage.localStorage.getAuthorization ()
  if (!authorization && to.path !== '/login/login'&& to.path !== '/login/logout') {
    // alert('请重新登录')
   window.location.replace('/login/logout')
  } else {
    next()
  }*/
  next()
})
export default router
