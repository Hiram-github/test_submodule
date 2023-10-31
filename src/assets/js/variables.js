/**
 *  @Description: 设置全局变量 JS文件
 *  @Author: ykl
 *  @Date:
 **/
//周一到周日的数中英对应关系
const weekDays = {
  SUNDAY: {cnName: "星期日", flag:0},
  MONDAY: {cnName: "星期一", flag:1},
  TUESDAY: {cnName: "星期二",flag:2},
  WEDNESDAY: {cnName: "星期三",flag:3},
  THURSDAY: {cnName: "星期四",flag:4},
  FRIDAY: {cnName: "星期五",flag:5},
  SATURDAY: {cnName: "星期六",flag:6}
}

//性别
const sex={
  WOMAN:{describe: "女",flag:0},
  MAX:{describe: "男",flag:1}
}

//答案选中类型
const answerSelectType={
  NO_SELECT:{describe: "没选中",flag:0},
  SELECT:{describe: "选中",flag:1}
}
//题目类型
const topicType={
  SINGLE_SELECT:{describe: "单选题",flag:0},
  MORE_SELECT:{describe: "不定项选择题",flag:1}
}

//答案对错类型
const answerResultType={
  ERROR:{describe: "错误",flag:0},
  CORRECT:{describe: "正确",flag:1}
}

//考试计划状态
const examStatus={
  NO_ISSUE:{describe: "未发布",flag:0},
  ISSUE:{describe: "发布",flag:1},
  EXAM_IN_EXECUTE:{describe: "考试执行中",flag:2},
  EXAM_OVER:{describe: "考试结束",flag:3},
  EXAM_CANCEL:{describe: "考试取消",flag:4}
}
//考生考试计划状态
const personExamStatus={
  NO_START_EXAM:{describe: "未开考（默认）",flag:0},
  EXAM_IN_EXECUTE:{describe: "考试中",flag:1},
  HAND_IN_PAPER:{describe: "已交卷",flag:2}
}
//练习类型
const exerciseType={
  ERROR_EXERCISE:{describe: "错误集练习",flag:0},
  NORMAL_EXERCISE:{describe: "题库练习",flag:1}
}

const answersOrderList=["A","B","C","D","E","F"]//答案下标对应的字母序号列表

//时间类型
const dateType={
  PRESENT_TIME_FORMAT: {describe: "当前时间",format:"",flag:0},
  STRIKE_FORMAT: {describe: "年月日-隔开格式",format:"yyyy-MM-dd HH:mm:ss",flag:1},
  SLASH_FORMAT: {describe: "年月日/隔开格式",format:"yyyy/MM/dd HH:mm:ss",flag:2},
  COLON_FORMAT: {describe: "全冒号格式",format:"yyyy:MM:dd:HH:mm:ss",flag:3},
  STRIKE_DATE_FORMAT: {describe: "只获取日期",format:"yyyy-MM-dd",flag:4},
  FONT_FORMAT: {describe: "年月日 汉字隔开格式",format:"yyyy年MM月dd HH:mm:ss",flag:5}
}

//base图片url
const baseImgUrl="http://jzl-cloud.com"
// const baseImgUrl="http://192.168.0.223"
// const baseImgUrl="http://123.56.231.116"

export default {
  weekDays,
  dateType,
  sex,
  answerSelectType,
  examStatus,
  personExamStatus,
  exerciseType,
  topicType,
  answerResultType,
  answersOrderList,
  baseImgUrl
}
