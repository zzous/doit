const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
   
   //   assetsDir: "./"
   //   asset 파일 위치 설정 
   assetsDir: 'assets',
   publicPath: './',
   productionSourceMap: false,
   transpileDependencies: [/node_modules[/\\\\]bootstrap[/\\\\]/],
}