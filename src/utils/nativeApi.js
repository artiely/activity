import JSBridge from './jsBridge'

const bridge = new JSBridge()
// 優化示例
export function getUserID() {
  return bridge.invokeNative({ method: 'getUserID', iosCallback: 'setUserID' })
}
// 使用方法 getUserID().then(res=>{})