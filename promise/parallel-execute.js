function interview(name) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve()
            } else {
                var err = new Error()
                err.name = name
                reject(err)
            }
        }, 300)
    }))
}
//链式执行
p1 = interview('geektime')
p2 = interview('tencent')

Promise.all([p1, p2]).then(value => {
    console.log('all passed')}).catch(reason => {
    console.log(reason.name + ' failed')
})
