var webpack =require('webpack')
var path = require('path')

module.exports = {
    entry:{
        'app':'./src/pageA.JS'
    },
    output:{
        path:path.resolve(__dirname,'./dist'),//打包文件的路径
        filename:'[name].bundle.js',//打报文件的名字
        chunkFilename:'[name].chunk.js'//生成代码块的名字
    },
    optimization: {
        splitChunks: {
          // 抽离入口文件公共模块为commmons模块
              name: "commons",
              chunks: "initial",
              minChunks: 2
        }
      },
}