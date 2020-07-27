import express from 'express'
import path from 'path'
import address from 'address'
import { createProxyMiddleware } from 'http-proxy-middleware'
import history from 'connect-history-api-fallback'
const app = express()
const localhost = address.ip()
let staticDir
let baseUrl
const argv = process.argv[2]
if (argv === 'test') {
  staticDir = '../dist/test'
  baseUrl = 'http://118.31.222.92:8088'
} else if (argv === 'stage') {
  staticDir = '../dist/gray'
  baseUrl = 'https://sp.timing360.com'
} else if (argv === 'release') {
  staticDir = '../dist/release'
  baseUrl = 'https://sp.timing360.com'
} else {
  staticDir = '../dist/dev'
  baseUrl = 'https://sp.timing360.com'
}

app.use(express.static(path.join(__dirname, staticDir)))

var options = {
  target: baseUrl, // 测试
  changeOrigin: true, // 需要虚拟主机站点
  pathRewrite: {},
}
var proxy = createProxyMiddleware(options) // 开启代理功能，并加载配置
app.use('/', proxy)
app.use(history())
app.listen(8888, (err) => {
  var uri = `http://${localhost}:8888`
  if (!err) {
    console.log(uri)
  } else {
    console.log(err)
  }
})
