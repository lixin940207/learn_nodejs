

var playerAction = process.argv[process.argv.length-1]
var mapping = {"rock": 0, 'paper':1, 'scissor': 2}
var playerNum = mapping[playerAction]

var computerNum = Math.floor(Math.random() * 3);
console.log(computerNum)

if(playerNum === computerNum){
    console.log('draw');
} else if (playerNum < computerNum){
    if (playerNum === 0 && computerNum === 2){
        console.log('you win')
    } else{
        console.log('you lose')
    }
} else{
    if (playerNum === 2 && computerNum === 0){
        console.log('you lose')
    } else{
        console.log('you win')
    }
}
