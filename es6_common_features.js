// 属性简写

var name='zhangsan'
var app={
    name // abbreviation if key and value have the same name
}

//方法简写
var name='zhangsan'
var app={
    name, // abbreviation if key and value have the same name
    run(){
        console.log(`${this.name} is runing`)
    }
}
app.run();

//arrow function
setTimeout(function (){
    console.log("execute")
}, 1000)
setTimeout(()=>{
    console.log("execute")
}, 1000)

//外部获取一部方法的数据
//给异步方法的参数中传一个callback
function getData(){
    //异步函数
    setTimeout(function () {
        var name='zhangsan'
        return name
    }, 1000)

}
console.log(getData())
// 这样是得不到name的
// 要加一个callback才能获取
function getData2(callback){
    //异步函数
    setTimeout(function () {
        var name='zhangsan'
        callback(name)
    }, 1000)

}
getData2(function (name) {
    console.log(name)

})

/* promise来处理异步
 */
var p = new Promise(function (resolve, reject) {
    
})