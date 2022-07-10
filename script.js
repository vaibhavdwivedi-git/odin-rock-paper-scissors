let player=0;
let computer=0;

function computerPlay(){
    let options = ["rock","paper","scissors"];
    var selection = options[Math.floor(Math.random()*options.length)];
    return selection;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = '';
    if(playerSelection == computerSelection){
        result = `Tie game!#${playerSelection.charAt(0).toUpperCase()+playerSelection.substring(1)} ties with ${computerSelection}.`;
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You won.#Rock beats scissors.';
        player++;
    }
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        result = 'You lost.#Paper beats rock.';
        computer++;
    }
    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        result = 'You lost.#Rock beats scissors.';
        computer++;
    }
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        result = 'You won.#Scissors beats paper.';
        player++;
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = 'You won.#Paper beats rock.';
        player++;
    }
    if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result = 'You lost.#Scissors beats paper.';
        computer++;
    }
    return result;
}

function Game(playerSelected){
        const playerSelection = playerSelected;
        const computerSelection = computerPlay();
        updateWeapons(playerSelection,"#player");
        updateWeapons(computerSelection,"#computer");
        str=playRound(playerSelection, computerSelection).split('#');
        document.querySelector('#main').textContent=str[0];
        document.querySelector('#sub').textContent=str[1];
        document.querySelector('#player>.score').textContent=`Player: ${player}`;
        document.querySelector('#computer>.score').textContent=`Computer: ${computer}`;   
        if(computer>=5||player>=5){
            gameover();
        }
}


buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click',Selected);
});

function Selected(e){
    playerSelected = this.getAttribute('id');
    Game(playerSelected);
}

function updateWeapons(option,selector){
    if(option=='rock'){
        weapon="✊";
    }
    if(option=='paper'){
        weapon="✋";
    }
    if(option=='scissors'){
        weapon="✌";
    }
    document.querySelector(`${selector}>.weapon`).textContent = weapon;
}

function gameover(){
    console.log("over");
    document.querySelector('#overlay').style.display='block';
    document.querySelector('#dialogbox').style.display='flex';
    decision = (player>computer)?"You Won !":"You Lost !";
    document.querySelector('#verdict').textContent = decision;
}

document.querySelector('#replay').addEventListener('click',()=>{
    window.location.reload();
});