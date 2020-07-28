export const iOS = () => {
  // 判断是否IOS
  var os = new Array('iPhone', 'iPad', 'iPod')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}
export const android = () => {
  // 判断是否android
  var os = new Array('Android')
  var info = navigator.userAgent
  var len = os.length
  for (var i = 0; i < len; i++) {
    if (info.indexOf(os[i]) > 0) {
      return true
    }
  }
  return false
}

const isIOS = iOS()
const isAndroid = android()

export default class JSBridge {
  invokeNative({ method, iosCallback }) {
    return function(args) {
      return new Promise((resolve, reject) => {
        console.log(
          `'当前调用的原始方法是：'${method},参数是：${JSON.stringify({
            ...args,
          })}`
        )
        // android
        if (isAndroid) {
          try {
            let res = window.android[method](args)
            resolve(res)
          } catch (error) {
            reject(error)
          }
          // iOS
        } else if (isIOS) {
          try {
            window[iosCallback] = (res) => {
              resolve(res)
            }
            window.webkit.messageHandlers[method].postMessage(args)
          } catch (error) {
            reject(error)
          }
        } else {
          reject(JSON.stringify({ type: '-1' }))
        }
      })
    }
  }
}
