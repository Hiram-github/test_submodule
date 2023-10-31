import axios from 'axios';
import MintUI from 'mint-ui';
import storage from "@/assets/js/util/storage.js";//localStorage sessionStorage 存储
import {ui} from "@/assets/js/util/page-ui.js";//公共弹窗提示
axios.defaults.timeout = 10000;
axios.defaults.retry = 1; //重试次数
axios.defaults.retryDelay = 1000; //重试延时
axios.defaults.shouldRetry = error => true; //重试条件，默认只要是错误都需要重试
axios.defaults.baseURL = '/app_gw/';


axios.interceptors.request.use (
  config => {
   let isLoading = config.isLoading
   if (isLoading == undefined || isLoading) {
      MintUI.Indicator.open({//打开loading
        spinnerType: 'fading-circle'
      });
    }
    //登陆用户有效性token（与后端验证）
    let loginUserAuthorization =storage.localStorage.getAuthorization();
    // let loginUserAuthorization =localStorage.getItem("authorization");
    if (!loginUserAuthorization) {
      loginUserAuthorization = 'b11f63a340d84875ac0688cb4c3262ce';
    }
    config.headers.Authorization = loginUserAuthorization;
    return config;
  },
  err => {
     MintUI.Indicator.close();//关闭loading
     ui.msg (err);
     return Promise.reject (err);
   }
   );

/*
 *返回状态码200—成功状态
 *1—服务器异常状态(异常时会将异常信息在message中返回)
 *其它code码 –代码处理的错误状态（会在错误信息会在message中返回）
 */
 axios.interceptors.response.use (
  response => {
     MintUI.Indicator.close();//关闭loading
     if (response.data.code == 200) {
      return response.data;
    } else if (response.data.code == 2002) {
      ui.msg ('用户会话过期请重新登录');
      window.location.replace ('/login/logout');
    } else {
      ui.msg (response.data.message);
      return response.data;
      //throw new Error("服务端接口返回错误码【"+response.data.code+"】\n 代码处理错误\n 错误信息【"+response.data.message+"】")
    }
  },
  error => {
     MintUI.Indicator.close();//关闭loading
     if (error.code === 'ECONNABORTED' && error.message.indexOf ('timeout') !== -1) {
      ui.msg ('请求超时');
    }
    let config = error.config;
    // 判断是否配置了重试
    if (!config || !config.retry) return Promise.reject (error);

    if (!config.shouldRetry || typeof config.shouldRetry != 'function') {
      return Promise.reject (error);
    }

    //判断是否满足重试条件
    if (!config.shouldRetry (error)) {
      return Promise.reject (error);
    }

    // 设置重置次数，默认为0
    config.retryCount = config.retryCount || 0;

    // 判断是否超过了重试次数
    if (config.retryCount >= config.retry) {
      return Promise.reject (error);
    }

    //重试次数自增
    config.retryCount += 1;

    //延时处理
    let backoff = new Promise (function (resolve) {
      setTimeout (function () {
        resolve ();
      }, config.retryDelay || 1);
    });

    //重新发起axios请求
    return backoff.then (function () {
      config.baseURL = ''; //TODO 避免404 否则会有多个app_gw  原因尚未找到
      return axios (config);
    });
  }
  );
export default axios;
