import base from './css/base.styl'
import common from './css/common.styl'

let app = document.getElementById('app')
app.innerHTML = "<div class='"+ base.box +"'></div>"
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
