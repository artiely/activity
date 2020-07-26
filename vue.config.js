const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')
let outputDir, assetsDir
if (process.env.VUE_APP_MODE === 'test') {
  outputDir = 'dist/test'
  assetsDir = './static'
} else if (process.env.VUE_APP_MODE === 'stage') {
  outputDir = 'dist/gray'
  assetsDir = './static'
} else if (process.env.VUE_APP_MODE === 'release') {
  outputDir = 'dist/release'
  assetsDir = './static'
}
const resolve = file => path.resolve(__dirname, file)
module.exports = {
  publicPath: '',
  outputDir: outputDir,
  assetsDir: assetsDir,
  indexPath: 'index.html',
  // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  // 不是这个 https://www.npmjs.com/package/style-resources-loader
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量
    },
  },
  css: {
    loaderOptions: {
      // https://github.com/ant-design/ant-motion/issues/44
      less: {
        javascriptEnabled: true,
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: [],
              minPixelValue: 2
            }),
            'autoprefixer'
          ])
        ],
        import: [
          resolve('./src/assets/theme.custom')
        ]
      },
      stylus: {
        use: [
          poststylus([
            pxtorem({
              rootValue: 100,
              propWhiteList: [],
              minPixelValue: 2
            }),
            'autoprefixer'
          ])
        ],
        import: [
          resolve('./src/assets/theme.custom')
        ]
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propWhiteList: [],
            minPixelValue: 2
          }),
          require('autoprefixer')()
        ]
      }
    }
  },
  transpileDependencies: [
    'mand-mobile'
  ]
}
