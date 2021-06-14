const game = require('./2.lib')

var playerAction = process.argv[process.argv.length-1]
const result = game(playerAction)
console.log(result)

process.stdin.on('data', e=>{
    var playerAction = e.toString().trim();
    console.log(game(playerAction))
})
