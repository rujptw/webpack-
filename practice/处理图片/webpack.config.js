let path = require('path')
module.exports = {
    entry:{
        main:'./src/main.js'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
            test: /\.(png|jpeg|gif|svg)(\?.*)?$/,
            use: [
                // {
                //     loader:'file-loader',//控制文件的位置，名字和各种信息
                //     options:{
                //         outputPath:'img/'//在dist目录之下
                //     }
                // },
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                }
            ]
        }]        
    }
}