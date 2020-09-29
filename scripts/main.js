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

    let child2= document.createElement('span');
    child2.classList.add('child-new');

    child2.textContent=`ROUND ${roundCounter}` + '\r\n';
    child2.textContent+='player: ' + player + "\r\n";
    child2.textContent+='computer: ' + computer;
    log.appendChild(child2);

    if(player==computer) {
        return "Tie!";
    } else if(player=="rock" && computer=="paper") {
        return "You Lose! Paper beats Rock.";
    } else if(player=="rock" && computer=="scissors") {
        return "You Win! Rock beats Scissors.";
    } else if(player=="paper" && computer=="scissors") {
        return "You Lose! Scissors beat Paper.";
    } else if(player=="paper" && computer=="rock") {
        return "You Win! Paper beats Rock.";
    } else if(player=="scissors" && computer=="rock") {
        return "You Lose! Rock beats Scissors.";
    } else if(player=="scissors" && computer=="paper") {
        return "You Win! Scissors beat Paper.";
    }
}


//let numberOfWins=prompt("Choose the number of wins:", 5);
let numberOfWins;
getInputValue();

let playerScore=0;
let computerScore=0;

let roundCounter=1;

const buttons= document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', play));

const log= document.querySelector('#log');

function play(e) {
    let computerRoll=computerPlay();
    let child= document.createElement('span');
    child.classList.add('child-new');

    let result=playRound(e.target.id, computerRoll);
    child.textContent=result + "\r\n";

    roundCounter+=1;

    if(/Win/.test(result)) {
        playerScore+=1;
    } else if(/Lose/.test(result) || result==undefined){
        computerScore+=1;
    }

    
    child.textContent+=`${playerScore}:${computerScore}` + '\r\n' + ' ';
    log.appendChild(child);

    //scrolls to last played round (to the bottom)
    log.lastChild.scrollIntoView(); 

    let nodelist=log.querySelectorAll('.child-new');
    if(nodelist.length>2) {
        nodelist[0].classList.toggle('child-new');
        nodelist[1].classList.toggle('child-new');
        
        //nodelist[0].classList.add('child-old');
        //nodelist[1].classList.add('child-old');
    }

    let msgEnd;
    if(playerScore==numberOfWins || computerScore==numberOfWins) {
        if(playerScore>computerScore) {
            msgEnd="YOU WIN\r\n";
        } else if(playerScore<computerScore) {
            msgEnd="YOU LOSE\r\n";
        } else if(playerScore==computerScore) {
            msgEnd="TIE\r\n";
        }
        
        msgEnd+=`${playerScore}:${computerScore}`;
        alert(msgEnd);

        playerScore=0;
        computerScore=0;

        roundCounter=1;
    }
}

const reset= document.querySelector('#clear');
reset.addEventListener('click', resetGame);

function resetGame() {
    const spans= document.querySelectorAll('span');
    spans.forEach(span => {
        log.removeChild(span);
    });

    playerScore=0;
    computerScore=0;

    roundCounter=1;
}

const inputSubmit= document.querySelector('#inputSubmit');
inputSubmit.addEventListener('click', getInputValue);

function getInputValue() {
    numberOfWins=document.querySelector('input').value;
}