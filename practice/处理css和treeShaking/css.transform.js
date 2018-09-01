module.exports = function(css){
    console.log(css)
    console.log(window.outerHeight)
    if(window.outerHeight>500){
        return css.replace('#000','aqua')
    }else{
        return css.replace('#000','pink')
    }
}