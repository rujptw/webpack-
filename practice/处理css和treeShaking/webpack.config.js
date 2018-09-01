//提示：图标相同即相关联
// 🆘：重要的提示
let path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取为单独的css文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
const autoPrefixer =require('autoprefixer')()
const cssNext = require('postcss-cssnext')()
// const cssNano = require('cssnano')
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
        rules: [
            {
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
                //在预编译处理语言前,在css-loader后
                {
                    loader:'postcss-loader',
                    options:{
                        ident:"postcss",//表明插件是给postcss用的
                        plugins:[
                            // autoPrefixer,//被调用后的结果
                            cssNext,//被调用后的结果
                            // cssNano
                        ]
                    }
                },
                {
                    loader: 'stylus-loader'
                }

            ]

        },{//webpack自身压缩js代码不能解决 某些第三方库tree shaking的问题，要引入另外的loader，来实现tree shaking
            //TODO: 打包错误，还需调试
            test:/\.js$/,
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        presets:["env"],
                        plugins:["lodash"]//cnpm i babel-babel-plugin-lodash -S,除此之外还要安装babel-core babel-loader babel-preset-env，如果之前没有安装过这些插件的话
                    
                }
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