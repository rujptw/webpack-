module.exports = {
    entry:{
        app:"./app.js"
    },
    output:{
        filename:"[name].[hash:3].js"
    },
    module:{
        rules:[
            {
             test:'/\.js$/',
             use:{
                 loader:'babel-loader',
                 options:{
                     //以什么规范打包
                     presets:['@babel/preset-env',
                     {  //适用于那些环境有node ，browsers等
                        targets:{
                         //编译的js支持的浏览器包括
                         browsers:["> 1%","last 2 versions"]
                     }}]
                 }
                },
                
                exclude:'/node_modules/'}
        ]
    }
}