import './log'
// 测试服配置
const MODE = process.env.VUE_APP_MODE

let baseURL = ''
if (MODE === 'dev') {
  // 开发
  baseURL = ''
} else if (MODE === 'test') {
  // 测试环境
  baseURL = 'http://118.31.222.92:8088'
} else if (MODE === 'stage') {
  // 灰度环境
  baseURL = '//101.37.27.140:12800'
} else if (MODE === 'release') {
  // 正式环境
  baseURL = 'https://sp.timing360.com'
}

export { baseURL }
