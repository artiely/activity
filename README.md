## 重要！服用前请先阅读使用说明
## 创建
该项目可以通过`timing-cli`创建
```sh
npm i -g timing-cli
# 选择活动模板
```
## 打包
```
npm run build:all 打包所有环境
```
## 重要！重要！重要！

`vconsole` `调试导航栏` 包括部分接口错误提示，只会出现在开发/测试/灰度，正式环境的包将剔除以上信息，开发时不必做特殊处理

## 配置
`src/config`配置基础路径

## 本地测试对应环境
```sh
npm run local:[mode]
# npm run local:stage
```
`server.js`配置本地测试
