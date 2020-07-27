import VConsole from 'vconsole'
import { baseURL, isSetting } from './index'
const MODE = process.env.VUE_APP_MODE

if (MODE !== 'release') {
  var vConsole = new VConsole()
  console.log('vConsole', vConsole)
}

console.log(
  '%c 当前的环境 %c ' + process.env.NODE_ENV + '',
  'color: #fff; background: #555555; padding:5px;',
  'color: #fff; background: #4FC921; padding:5px;'
)
console.log(
  '%c 当前的模式 %c ' + process.env.VUE_APP_MODE + '',
  'color: #fff; background: #555555; padding:5px;',
  'color: #fff; background: #4FC921; padding:5px;'
)
console.log(
  '%c 当前的调试 %c ' + isSetting + '',
  'color: #fff; background: #555555; padding:5px;',
  'color: #fff; background: #4FC921; padding:5px;'
)
console.log(
  '%c 当前的baseURL %c' + baseURL + '',
  'color: #fff; background: #555555; padding:5px;',
  'color: #fff;background: #1890ff; padding:5px;'
)
