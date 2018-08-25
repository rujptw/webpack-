//适用于单入口项目require.include
require.include('./moduleA')
//require动态加载本地模块，将两个模块打包到同一个代码块中
// require.ensure(['./subpageA','./subpageB.js'], function () {
//     var pageA = require('./subpageA')
//     var pageB = require('./subpageB')
//     console.log(pageA+pageB)
// }, 'sumPage')//chunk名

//import动态加载本地模块，注释里为chunk名
import(/*webpackChunkName:'pageA'*/ './subpageA').then(()=>{
    console.log("PageA")
})
//异步加载第三方依赖，将第三方单独打包出来一个代码块
require.ensure(['lodash'], function () {
    var _ = require('lodash')
    _.join(['1', '2'], '3')
}, 'vendor')
export default 'pageA'