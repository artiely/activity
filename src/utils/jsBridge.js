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
            if(args){
              let res = window.android['getUserID'](args)
              resolve(res)
            }else{
              let res = window.android['getUserID']()
              resolve(res)
            }
          } catch (error) {
            reject(error)
          }
          // iOS
        } else if (isIOS) {
          try {
            if (iosCallback) {
              window[iosCallback] = (res) => {
                resolve(res)
              }
            }else{
              reject({ type: '-1' })
            }
            window.webkit.messageHandlers[method].postMessage(args)
          } catch (error) {
            reject(error)
          }
        } else {
          reject({ type: '-1' })
        }
      })
    }
  }
}
