import { baseURL } from '../config'
let BASE_URL = baseURL
export default {
  // api请求地址的根路径
  api: {
    retry: 1, // 失败重试次数
    retryDelay: 1000, // 失败重试延时
    shouldRetry: () => true, // 失败重试条件，默认只要是错误都需要重试
    url: BASE_URL,
    timeout: 1000 * 60 * 60 * 10,
    // 自定义一些配置(包括修改请求头等)
    set_config: config => {
      return config
    },
    //   请求错误自定义
    error_handler: error => {
      console.log("error", error)
    }
  }
}
