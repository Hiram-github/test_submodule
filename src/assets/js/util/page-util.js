/**
 *  @Description: 公共函数JS
 *  @Author: ykl
 *  @Date:   2018-11-19 16:46
 **/
 import variables from  '@/assets/js/variables'


/**
 *  时间戳转换成
 * @param timeStamp 时间搓
 * @param timeTypeFlag 转换后的时间类型 参公共变量dataType的flag属性
 * @returns {*}
 * @Author: ykl
 */
 export const formatDateTime = (timeStamp, timeTypeFlag) => {
   let date;
   if (timeTypeFlag == variables.dateType.PRESENT_TIME_FORMAT.flag)
    date = new Date();
  else if (timeStamp)
    date = new Date(timeStamp);
  else
    return;

  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;

  if (timeTypeFlag == variables.dateType.STRIKE_FORMAT.flag) {
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  } else if (timeTypeFlag == variables.dateType.SLASH_FORMAT.flag) {//斜杠类型
    return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
  } else if (timeTypeFlag == variables.dateType.COLON_FORMAT.flag) {//：类型
    return y + ':' + m + ':' + d + ' ' + h + ':' + minute + ':' + second;
  }else if(timeTypeFlag == variables.dateType.FONT_FORMAT.flag) {
    return y + '年' + m + '月' + d+ ' ' + h + ':' + minute + ':' + second;
  } else if(timeTypeFlag == variables.dateType.STRIKE_DATE_FORMAT.flag) {
    return y + '-' + m + '-' + d
  }
};

/**
 *  获取选择答案结果对象
 * @param topicObj 题目对象(包含该题目答案列表)
 */
 export const getSelAnsRes=(topicObj)=>{
  const result=new function(){
    this.correctAnswerNum = 0 //真确答案数
    this.selectCorrectNum = 0 //选择答案数
    this.correctNos=""//真确的答案序号字符串
    this.selAnsIdStr = ""//选择的id 
    this.selAnsNos = ""//选择的答案序号字符串
    this.errSelAnsIdStr=""//错误选择的id 拼接字符串
    this.isCorrect=false//是否回答真确
  }
  let answersOrderList=variables.answersOrderList//答案下标对应的字母序号列表
  let answerResultMenu=variables.answerResultType//答案结果类型枚举
  let answerSelectMenu=variables.answerSelectType//答案选择类型(状态)枚举
  let answers=topicObj.answers?topicObj.answers:[]

  
  for(let i=0;i<answers.length;i++){
    let item=answers[i]
    if(item.is_right==answerResultMenu.CORRECT.flag){
      result.correctAnswerNum++//正确答案数
      result.correctNos+=answersOrderList[i]+" "
      if(item.is_select==answerSelectMenu.SELECT.flag)
        result.selectCorrectNum++//正确并选择过的答案数
    }
      //选择过的答案
      if(item.is_select==answerSelectMenu.SELECT.flag){
        result.selAnsIdStr+=item.id+","
        result.selAnsNos+=answersOrderList[i]+" "
        //错误并选择过的答案
        if(item.is_right==answerResultMenu.ERROR.flag)
          result.errSelAnsIdStr+=item.id+","
      }
    }

    if(result.correctAnswerNum>0 && result.correctAnswerNum==result.selectCorrectNum && result.errSelAnsIdStr.length==0){//答题正确
      result.isCorrect=true
    }else if(result.errSelAnsIdStr.length>0 && result.correctAnswerNum>0){//答题错误
      result.errSelAnsIdStr = result.errSelAnsIdStr.substr(0, result.errSelAnsIdStr.length - 1);//去掉拼接答案id最后一个逗号
      //self.addErrorTopic(topicObj.id,topicObj.depot_id,errSelAnsIdStr)
      result.isCorrect=false
    }
    return result
  }

