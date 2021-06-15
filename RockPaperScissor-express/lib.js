function game(playerAction) {
    var mapping = {"rock": 0, 'paper':1, 'scissor': 2}
    var playerNum = mapping[playerAction]

    var computerNum = Math.floor(Math.random() * 3);
    console.log(computerNum)

    if(playerNum === computerNum){
        console.log('draw');
        return 0;
    } else if (playerNum < computerNum){
        if (playerNum === 0 && computerNum === 2){
            console.log('you win')
            return 1;
        } else{
            console.log('you lose')
            return 1;
        }
    } else{
        if (playerNum === 2 && computerNum === 0){
            console.log('you lose')
            return -1;
        } else{
            console.log('you win')
            return 1;
        }
    }
}

module.exports = game
