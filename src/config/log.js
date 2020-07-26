import VConsole from 'vconsole'
const MODE = process.env.VUE_APP_MODE

if (MODE !== 'release') {
  var vConsole = new VConsole()
  console.log("vConsole", vConsole)
}
console.log(
  '%c当前的环境是 ' + process.env.NODE_ENV,
  'font-size:14px;color:#fff;background:red;padding:4px;font-family:Artiely;letter-spacing:2px'
)
console.log(
  '%c当前的模式是 ' + process.env.VUE_APP_MODE,
  'font-size:14px;color:#fff;background:red;padding:4px;font-family:Artiely;letter-spacing:2px'
)
