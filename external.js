let random_int = Math.floor(Math.random() * 3);



function computerPlay(){
    let plays = ["rock", "paper", "scissors"];
    let play = plays[random_int];
    return play;
}

function playRound(player_selection, computer_selection){
    console.log(`It is ${player_selection} vs ${computer_selection}`)

    if (player_selection == "rock" && computer_selection == "scissors"){
        return "You Win";
    } else if (player_selection == "paper" && computer_selection == 'rock'){
        return "You Win";
    } else if (player_selection == "scissors" && computer_selection == "paper"){
        return "You Win";
    } else if (player_selection == "rock" && computer_selection == "paper"){
        return "You Lose";
    } else if (player_selection == "paper" && computer_selection == "scissors"){
        return "You Lose";
    } else if (player_selection == "scissors" && computer_selection == "rock"){
        return "You Lose";
    } else{
        return "Tie";
    }
}

function game(){

    let player_total = 0;
    let cpu_total = 0;

    for (let i = 0; i < 5; i++){
        let player_selection = prompt("Pick rock/paper/scissors").toLowerCase();
        let computer_selection = computerPlay();
        let round = playRound(player_selection, computer_selection);
        console.log(round)

        if (round == "You Win"){
            player_total ++;
            console.log(`Player total is now ${player_total}`)
        } else if (round == "You Lose"){
            cpu_total ++;
            console.log(`cpu total is now ${cpu_total}`)
        }
    }
    if (cpu_total > player_total){
        return "cpu wins the game!";
    } else if (player_total > cpu_total){
        return "you won the game"
    } else {
        return "the game was a tie!";
    }

    
}


function test(){
    for(let i = 0; i < 5; i++){
        console.log(3)
    }
}

console.log(game())