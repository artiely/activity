
// 测试服配置
const MODE = process.env.VUE_APP_MODE

let baseURL = ''
let JavaUrl = ''
// 是否打开调试信息
let isSetting = false
if (MODE === 'dev') {
  // 开发
  baseURL = ''
  JavaUrl = '//47.111.114.205:12800'
} else if (MODE === 'test') {
  // 测试环境
  baseURL = '//118.31.222.92'
  JavaUrl = '//47.111.114.205:12800'
} else if (MODE === 'stage') {
  // 灰度环境
  baseURL = '//101.37.27.140:8083'
  JavaUrl = '//47.111.19.97:12800'
} else if (MODE === 'release') {
  // 正式环境
  baseURL = '//actapi.timing360.com'
  JavaUrl = '//ms.timing360.com'
}
export { baseURL, JavaUrl, isSetting }
