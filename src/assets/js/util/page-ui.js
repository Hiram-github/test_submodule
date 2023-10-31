/**
 *  @Description: 公共弹窗JS
 *  @Author: ykl
 *  @Date:   2018-11-19 16:46
 **/
 import MintUI from 'mint-ui';
 import variables from  '@/assets/js/variables';


/**
 *  公共消息
 * @message  提示消息
 * @position 提示的为位置 {top,bottom,middle}
 * @durationa 窗口的多少毫秒后关闭
 * @Author: ykl
 */

 export const ui=new function () {
  this.alert = function (message,position, duration) {
    this.msgBox(message, position,duration,"alert");
  },

  this.warn = function (message,position, duration) {
    this.msgBox(message, position,duration,"warn");
  },

  this.msg = function (message,position, duration) {
    this.msgBox(message, position,duration,"msg");
  },

  this.msgBox=function (message,position="top", duration=1500,type) {
    MintUI.Toast ({
      message: message,
      position: position,
      duration: duration,
      className:type    
    })
  }
}
