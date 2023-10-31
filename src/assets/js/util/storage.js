/**
 *  @Description: 操作sessionStorage
 *  @Author: ykl
 *  @Date:   2019-01-08 16:46
 **/
 const sessionStorage =new function(){
  this.storage=window.sessionStorage,
  this.setItem=function (key, value) {
    if (typeof(value) !='string')
    {
      this.storage.setItem(key, JSON.stringify(value))
      return;
    }
    this.storage.setItem(key,value)
  },
  this.getItem=function (key) {
    let tempValue = this.storage.getItem(key)
    let objValue;
    try{
     objValue=JSON.parse(tempValue)
    }catch(err){
      return tempValue
    }
    if (typeof(objValue) == 'function'||typeof(objValue) == 'object')
      return objValue
    return tempValue
  },
  this.removeItem=function(key){
    if (!key) return;
    this.storage.removeItem(key);
  },
  this.clear=function(){
    this.storage.clear()
  }
}
/**
 *  @Description: 操作localStorage
 *  @Author: ykl
 *  @Date:   2019-01-08 16:46
 **/
 const localStorage = new function() {
  this.storage=window.localStorage,
  this.setItem=function (key, value) {
    if (typeof(value) != 'string')
    {
      this.storage.setItem(key, JSON.stringify(value))
      return;
    }
    this.storage.setItem(key,value)
  },
  this.getItem=function (key) {
    let tempValue = this.storage.getItem(key)
    let objValue;
    try{
     objValue=JSON.parse(tempValue)
    }catch(err){
      return tempValue
    }
    if (typeof(objValue) == 'function'||typeof(objValue) == 'object')
      return objValue
    return tempValue
  },
  this.getAuthorization=function(){
    return this.getItem("authorization")
  },
  this.setAuthorization=function(value){
    return this.setItem("authorization",value)
  },
  this.getCompanyName=function(){
     let userInfo = this.getLoginUserInfo()
     if(!userInfo)
        return
     let enterprise=userInfo.enterprise//公司名
     if(!enterprise)//公司名
        return
     return enterprise
  },
  this.getLoginUserInfo=function(){
    return this.getItem("loginUserInfo")
  },
  this.removeItem=function(key){
    if (!key) return;
    this.storage.removeItem(key);
  },
  this.clear=function(){
    this.storage.clear()
  }
}

export default{
  sessionStorage,
  localStorage
}