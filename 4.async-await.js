// async function test() {
//     return "test"
// } // test()返回一个promise对象,要得到值，需要用await

async function main() {
    var data = await test() // await必须用在async方法中
    console.log(data)
}

async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            var name = "zhangsan"
            resolve(name)
        }, 1000)
    })
}

main()
