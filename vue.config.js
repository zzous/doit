const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
   
   //   assetsDir: "./"
   //   asset 파일 위치 설정 
   assetsDir: 'assets',
   publicPath: process.env.NODE_ENV === 'production'
    ? '/doit/'
    : '/',
//    productionSourceMap: false,
// //    transpileDependencies: [/node_modules[/\\\\]bootstrap[/\\\\]/],
//     chainWebpack: config => {
//     config.output.chunkFilename('[name].[chunkhash].js')
//     config.plugins.delete('prefetch')
//   },
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          include: path.resolve('node_modules', 'bootstrap-vue'),
          sideEffects: false
        }
      ]
    }
  }
}