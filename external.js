let random_int = Math.floor(Math.random() * 3);



function computerPlay(){
    let plays = ["rock", "paper", "scissors"];
    let play = plays[random_int];
    return play;
}

function playRound(player_selection, computer_selection){

    console.log(player_selection);
    console.log(computer_selection);
}


const player_selection = prompt().toLowerCase()
const computer_selection = computerPlay()
console.log(playRound(player_selection, computer_selection));
