function computerPlay() {
    let num= Math.random();

    if (num>0.66) {
        return "Rock";
    } else if(num>0.33 && num<0.66) {
        return "Paper";
    } else if(num<0.33) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let player= playerSelection.toLowerCase();
    let computer= computerSelection.toLowerCase();

    console.log(player);
    console.log(computer);

    if(player==computer) {
        return "Tie!";
    } else if(player=="rock" && computer=="paper") {
        return "You Lose! Paper beats Rock";
    } else if(player=="rock" && computer=="scissors") {
        return "You Win! Rock beats Scissors";
    } else if(player=="paper" && computer=="scissors") {
        return "You Lose! Scissors beat Paper";
    } else if(player=="paper" && computer=="rock") {
        return "You Win! Paper beats Rock";
    } else if(player=="scissors" && computer=="rock") {
        return "You Lose! Rock beats Scissors";
    } else if(player=="scissors" && computer=="paper") {
        return "You Win! Scissors beat Paper";
    }
}


let numberOfWins=prompt("Choose the number of wins:", 5);

const buttons= document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', play));

let playerScore=0;
let computerScore=0;

function play(e) {
    let computerRoll=computerPlay();

    let result=playRound(e.target.id, computerRoll);
    console.log(result);

    if(/Win/.test(result)) {
        playerScore+=1;
    } else if(/Lose/.test(result) || result==undefined){
        computerScore+=1;
    }

    console.log(`${playerScore}:${computerScore}`);

    if(playerScore==numberOfWins || computerScore==numberOfWins) {
        if(playerScore>computerScore) {
            console.log("YOU WIN");
        } else if(playerScore<computerScore) {
            console.log("YOU LOSE");
        } else if(playerScore==computerScore) {
            console.log("TIE");
        }
        
        console.log(`${playerScore}:${computerScore}`);

        playerScore=0;
        computerScore=0;

        console.log(`${playerScore}:${computerScore}`);
    }
}