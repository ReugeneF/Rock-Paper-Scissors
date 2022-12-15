const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let player;
let computer;
let result;

const settingsB = document.getElementById("rpsettings");
const settings = document.getElementById("rps-settings");

possibleChoices.forEach(button => button.addEventListener('click', (e) =>{
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
})); //Button identifier so it knows your choice

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

} //Computer choices (randomized)


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

} //Win or lose stakes


function pic1(){
    playerChoice.src = "/icons/rock.png"
};

function pic2(){
    playerChoice.src = "/icons/paper.png"
};

function pic3(){
    playerChoice.src = "/icons/scissors.png"
}; 
//The icons and buttons, once selected it knows which picture to take

settingsB.addEventListener("click", function opensettings(){
   if(settings.className == "rps-settings-pageC"){ 
    settings.className = "rps-settings-page";
}   else{
    settings.className = "rps-settings-pageC";
}
    }) 
//Opening and closing the settings page
 
const dmodeB = document.getElementById('darkmode');
const dmodeC = document.getElementById('lightmode')

dmodeB.addEventListener("click", function darkmode(){
    if(dmodeC.style.backgroundColor = "#3c3c3c"){
        // dmodeB.src = "/icons/moon.png";
        dmodeC.style.backgroundColor = "#1e1e1e";
        console.log("oke");
    }
    if(dmodeC.style.backgroundColor = "#1e1e1e"){
        // dmodeB.src = "/icons/sun.png";
        dmodeC.style.backgroundColor = "#3c3c3c";
        
    }
})

