const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let player;
let computer;
let result;

possibleChoices.forEach(button => button.addEventListener('click', (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) +1;

    if(randomNumber == 1){
        computer = "rock";
        computerChoice.src = "/icons/rock.png";
    } 
    if(randomNumber == 2){
        computer = "paper";
        computerChoice.src = "/icons/paper.png";
    } 
    if(randomNumber == 3){
        computer = "scissors"
        computerChoice.src = "/icons/scissors.png";
    };

}


function getResult(){
    if (computer == player){
        resultOutput.src = "/imgs/Draw.png";
    };   if(computer == "rock" && player == "paper"){
        resultOutput.src = "/imgs/Win.png";
    };   if( computer == "rock" && player == "scissors"){
        resultOutput.src = "/imgs/Lose.png";
    };   if(computer == "paper" && player == "scissors"){
        resultOutput.src = "/imgs/Win.png";
    };   if(computer == "paper" && player == "rock"){
        resultOutput.src = "/imgs/Lose.png";
    };    if(computer == "scissors" && player == "rock"){
        resultOutput.src = "/imgs/Win.png";
    };   if(computer == "scissors" && player == "paper"){
        resultOutput.src = "/imgs/Lose.png";
    };

}

function pic1(){
    playerChoice.src = "/icons/rock.png"
};

function pic2(){
    playerChoice.src = "/icons/paper.png"
};

function pic3(){
    playerChoice.src = "/icons/scissors.png"
};


