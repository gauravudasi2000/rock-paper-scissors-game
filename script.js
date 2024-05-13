let userScore = 0;
let compScore = 0;

const rpsModes = document.querySelectorAll(".mode");
const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");


rpsModes.forEach((mode) => {
    mode.addEventListener(("click"), () => {
        const userChoice = mode.getAttribute("id");
        console.log("mode is clicked ", userChoice);
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    console.log("User choice is = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice is = ", compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () => { 
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
};

const gameDraw = () => {
    msg.innerText = "Game was Draw . Play Again";
    msg.style.backgroundColor = "#151515";
    console.log("Game was Draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Win");
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        console.log("You Lose");
        msg.style.backgroundColor = "red";
    }
};