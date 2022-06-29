let player=0;
let computer=0;

function computerPlay(){
    let options = ["Rock","Paper","Scissors"];
    var selection = options[Math.floor(Math.random()*options.length)];
    return selection;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = '';
    if(playerSelection == computerSelection){
        result = 'Tie game!';
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You won. Rock beats scissors.';
        player++;
    }
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        result = 'You lost. Paper beats rock.';
        computer++;
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        result = 'You lost. Rock beats scissors.';
        computer++;
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'You won. Scissors beats paper.';
        player++;
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You won. Paper beats rock.';
        player++;
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result = 'You lost. Scissors beats paper.';
        computer++;
    }
    return result;
}

function Game(){
    while(computer<5 && player<5){
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        score=`Scoreline: ${player}-${computer}`;
        console.log(score);
    }
}

Game();