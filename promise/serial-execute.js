function interview(round) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve()
            } else {
                var err = new Error()
                err.round = round
                reject(err)
            }
        }, 300)
    }))
}
//链式执行
resuilt = interview(1).then(value => {
    return interview(2)
}).then(value => {
    return interview(3)
}).then(value => {
    console.log('smile')
}).catch(reason => {
    console.log('cry at round '+reason.round)
})
