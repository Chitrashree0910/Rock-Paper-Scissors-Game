let userScore = 0;
let computerScore = 0;

//accessing all the choices means rock paper scissors
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//accessing the user and computer score from the HTML file
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

//here we are writing code for the computer choices in random

const genComputerChoice = () => {
    //now we're creating array so the computer can randomly choose any one among rock, paper, scissors
    const options = ["rock", "paper", "scissors"]; //reason we've written in array format is coz string cannot be generated randomly but number can so to get the random string from the given array we use it's index value
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    // console.log("It's a draw");
    msg.innerText = `It's a draw! Play Again`;
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++; //for updating values when user wins
        userScorePara.innerText = userScore;
        // console.log("You won!");
        msg.innerText = `You Won! As your choice was ${userChoice} and Computer choice was ${computerChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        computerScore++; //for updating values when computer wins
        computerScorePara.innerText = computerScore;
        // console.log("You lost!");
        msg.innerText = `You lost! As your choice was ${userChoice} and Computer choice was ${computerChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =" ,userChoice);
    //generate computer choice
    const computerChoice = genComputerChoice();
    console.log("Computer Choice =", computerChoice);

    //writing the if method to check who won or like giving conditions for winning the game
    if(userChoice === computerChoice) {
        //if both choices are same then it's draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //here the computer might choose between scissors or paper
            userWin = computerChoice === "paper" ? false : true; //if computer chooses paper against rock then computer looses if it chooses scissors the computer will win
        } else if(userChoice === "paper"){
            //here the computer might choose between scissors or rock
            userWin = computerChoice === "scissors" ? false : true;            
        } else {
            //now the computer have rock or paper to choose coz now user have scissors
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

// adding event listner to track the click event
choices.forEach ((choice) => { //here we get every single choice from the HTML
    choice.addEventListener("click", () =>{  //this will track the every click on the choice
        const userChoice =choice.getAttribute("id"); //this show which specific choice we've clicked
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice); //this is used when the user clicks the game starts and the computer randomly choses the index from the array
    });
});