let random_int = Math.floor(Math.random() * 3);



function computerPlay(){
    let plays = ["Rock", "Paper", "Scissors"];
    let play = plays[random_int];
    return play;
}

function playRound(player_selection, computer_selection){
    player_selection = prompt().toLowerCase()

    console.log(player_selection);
    
}

let computer_move = computerPlay()
console.log(computer_move)
playRound()