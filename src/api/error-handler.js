import {Toast} from 'mand-mobile'
import configs from './config'
// 是否生产环境
const PRODUCTION = process.env.NODE_ENV === 'production'

export default function errorHandler(error) {
  if (!error.response) {
    if (error.message && error.message.includes('timeout')) {
      console.error('超时了')
    } else if (error.message && error.message === '请求重复') {
      console.error('请求重复')
    } else if (error.message && error.message.includes('cancel')) {
      console.error('请求被取消')
    } else {
      console.error('请求失败', error)
    }
  } else {
    configs.api.error_handler && configs.api.error_handler(error)
    if (!PRODUCTION) {
      const url = error.response.config.url
      const params = error.response.config.data
      const code = error.response.status
      const status = error.response.data
      console.table([url,params,code,status])
      Toast.failed('这是请求错误提示，只会出现在测试环境')
    }
  }
}
