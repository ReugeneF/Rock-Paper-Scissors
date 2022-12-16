const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');
const buttons = document.getElementsByClassName('RButton')

let possibleChoices = document.querySelectorAll('button');
let styling = document.getElementById('rpsstylethis')
let styling2 = document.getElementById('rpsstylethis2')
let body = document.getElementById('rpsobody')
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
let dmodeA = document.getElementById('lmode');
let dmodeB = document.getElementById('darkmode');
let dmodeC = document.getElementById('lightmode');
let changeThis = document.getElementsByName('classnamejs').className

dmodeB.addEventListener("click", function darkmode(){
    if(dmodeB.style.display = "block"){
        dmodeA.style.display = "block";
        dmodeB.style.display = "none";
        dmodeC.style.backgroundColor = "#2e2e2e";
        dmodeC.style.border = "0.2rem solid black";
        styling.style.borderColor = "red";
        styling2.style.borderColor = "red";
        document.body.style.backgroundColor = "#2d2d30";
    } 
})
dmodeA.addEventListener("click", function lmode(){
    if(dmodeA.style.display = "block"){
        dmodeA.style.display = "none";
        dmodeB.style.display = "block";
        dmodeC.style.backgroundColor = "#6e6e6e";
        dmodeC.style.border = "0.2rem solid white";
        styling.style.borderColor = "black";
        styling2.style.borderColor = "black";
        document.body.style.backgroundColor = "lightgrey";
    } 
})

//volume
let rpsSound = document.getElementById('sound')
let rpsMute = document.getElementById('mute')
let rpsButton = document.getElementById('rpssound')
let mutethis = document.getElementById('fsound')

rpsSound.addEventListener("click", function mute(){
    if(rpsSound.style.display = "block"){
        rpsMute.style.display = "block"
        rpsSound.style.display = "none"
        rpsButton.style.backgroundColor = "#2e2e2e"
        rpsButton.style.border = "0.2rem solid black"
        mutethis.src = "none"
        
    } 
})
rpsMute.addEventListener("click", function unmute(){
    if(rpsMute.style.display = "block"){
        rpsMute.style.display = "none"
        rpsSound.style.display = "block"
        rpsButton.style.backgroundColor = "#6e6e6e"
        rpsButton.style.border = "0.2rem solid white"
        mutethis.src = "/Tobu - Sweet Story (128 kbps).mp3"
    } 
})

// Themes



