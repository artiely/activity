const path = require('path')
// https://github.com/lavas-project/vue-skeleton-webpack-plugin
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// https://github.com/webpack-contrib/terser-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin')
// https://github.com/webpack-contrib/compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// https://github.com/erikdesjardins/zip-webpack-plugin
const ZipPlugin = require('zip-webpack-plugin')

// 骨架插件
exports.skeleton = new SkeletonWebpackPlugin({
  webpackConfig: {
    entry: {
      app: path.join(__dirname, './src/plugins/skeleton.js'),
    },
  },
  minimize: true,
  quiet: true,
})

// 自定义压缩配置
exports.TerserPlugin = new TerserPlugin({
  terserOptions: {
    warnings: false,
    compress: {
      drop_debugger: true,
      drop_console: true,
    },
  },
  sourceMap: false,
  parallel: true,
})
// 打包生产.gz包
const productionGzipExtensions = ['js', 'css']
exports.compressionWebpackPlugin = new CompressionWebpackPlugin({
  algorithm: 'gzip',
  test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  threshold: 10240,
  minRatio: 0.8,
})
// 对打包文件进行压缩
exports.zipPlugin = new ZipPlugin({
  path: path.join(__dirname, 'dist'),
  filename: 'dist.zip',
})
