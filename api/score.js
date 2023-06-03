/**
 * 成绩相关请求
 */

const R = require('../utils/request')

// 获取成绩列表
function getScoreList(redirect){
  return R({
    url: 'score/getscorelist',
    redirect
  })
}

// 更新成绩
function updateScore(data){
  return R({
    url: 'score/updateScoreList',
    data
  })
}

// 获取已修学分
function getAllCredit(){
  return R({
    url:'score/getAllCredit'
  })
}

// 获取学期班级排名
function getTermRank(data){
  return R({
    url: 'score/getTermRank',
    data
  })
}

// 获取生涯班级排名
function getAllRank(){
  return R({
    url: 'score/getAllRank'
  })
}

// 获取单科成绩信息
function getCourseScoreData(data){
  return R({
    url: 'score/getCourseScoreData',
    data
  })
}

// 获取学业报告
function getScoreAnalysis(){
  return R({
    url: 'score/getscoreanalysis'
  })
}

// 获取挂科率榜
function getScoreFailRank(){
  return R({
    url: 'score/getScoreFailRank'
  })
}

// 获取成绩需求请求
function getScoreDemand(){
  return R({
    url: 'score/getScoreDemand'
  })
}

// 订阅成绩通知
function subscribeScore(data) {
  return R({
    url: 'score/subscribeMessage',
    data
  })
}

module.exports = {
  getScoreList,
  updateScore,
  getAllCredit,
  getTermRank,
  getAllRank,
  getCourseScoreData,
  getScoreAnalysis,
  getScoreFailRank,
  getScoreDemand,
  subscribeScore
}
