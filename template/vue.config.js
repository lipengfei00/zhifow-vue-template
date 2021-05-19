{{#if emptyVueConfig}}

{{else}}
const path = require("path");
const { resolve } = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const Version = new Date().getTime()


module.exports = {
  publicPath: {{#if envPackage}}process.env.VUE_APP_PUBLISHPATH{{else}}'/'{{/if}},
  lintOnSave: false,
  outputDir: {{#if envPackage}}process.env.VUE_APP_OUTPUTDIR{{else}}'/dist'{{/if}},
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    // 配置多个代理
    proxy: {
      '/zyqm': {
        target: {{#if envPackage}}process.env.VUE_APP_TARGET{{else}}'/'{{/if}},
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/zyqm': '/zyqm',
        },
      },
    },
  },
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: false,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       require('postcss-pxtorem')({
    //         rootValue: 100, // 换算的基数
    //         selectorBlackList: [], // 忽略转换正则匹配项
    //         propList: ['*'],
    //         minPixelValue: 2,
    //       }),
    //     ],
    //   },
    // },
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${Version}.js`,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `css/[name].${Version}.css`,
      }),
    ],
  },
  // 打包时不生成.map文件
  productionSourceMap: false
}
{{/if}}