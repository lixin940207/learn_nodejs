function interview(round) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve()
            } else {
                var err = new Error()
                err.round = round
                reject(err)
            }
        }, 300)
    }))
}

async function main() {
    try {
        // await interview(1)
        // await interview(2)
        // await interview(3)
        await Promise.all([interview(1), interview(2), interview(3)])
        console.log('success')
    }catch (e) {
        console.log('failed at round '+e.round)
    }
}
main()
