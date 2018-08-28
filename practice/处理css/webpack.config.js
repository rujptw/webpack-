//提示：图标相同即相关联
// 🆘：重要的提示
let path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取为单独的css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css文件
module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
            test: /\.styl$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist/'
                      }
                },
                // {使用MiniCssExtractPlugin时，不能用style-loader
                //     /*☝ */
                //     loader: 'style-loader', //2. 将css放入style标签内
                //     options: {
                //         insertInto: 'html', //插入某个dom中
                //         singleton: true, //是否将css放入一个style标签内
                //         transform: './css.transform.js' //在浏览器环境下对css进行形变
                //     }
                //     //🐷loader:'style-loader/url'//将css文件引入进来 🆘此方法不常用因为引入多个会打包多个文件，引入时会造成多次网络请求
                //     //☝loader:'style-loader/useable'//控制样式是否插入
                // },
                {
                    /*☝*/
                    loader: 'css-loader', //1. 将css从js中提取出来
                    /*☝*/
                    options: {
                        // minimize: true, 压缩效果已经被移除
                        //启用css-modules
                        modules: true,
                        // 定义webpack处理过的css名
                        localIdentName: '[path] [name]_[local]_[hash:base64:5]'
                    }
                    //🐷 loader:'file-loader' //打包css为一个文件
                },
                {
                    loader: 'stylus-loader'
                }

            ]

        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new OptimizeCssAssetsPlugin({})
    ]
}