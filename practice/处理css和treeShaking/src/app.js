import base from './css/base.styl'
import common from './css/common.styl'
import {a,b,c,d,e} from "./common/utils"
a()
b()
c()
d()
e()
let app = document.getElementById('app')
app.innerHTML = "<div class='"+ base.box +"'></div>"
import {chunk} from 'lodash'
console.log(chunk([1,2,3,4,5],2))
//使用useable后的写法
// import base from './css/base.css'
// import common from './css/common.css'

// let flag= false

// setInterval(()=>{
//     if(flag){
//         //样式是否使用函数
//         base.use()
//         flag = false
//     }else{
//         base.unuse()
//         flag = true        
//     }
// },200)
