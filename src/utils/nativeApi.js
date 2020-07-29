import JSBridge from './jsBridge'

const bridge = new JSBridge()
console.log("bridge", bridge)
// 優化示例
export const getUserID = bridge.invokeNative({ method: 'getUserID', iosCallback: 'setUserID' })
// 使用方法 getUserID().then(res=>{})