let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const genComputerChoice = () =>{
    const option =["paper","rock","scissor"];
   const randIdx = Math.floor(Math.random() *3);
   return option[randIdx];
}

const drawGame = () =>{
      msg.innerText = "Game Was Draw. Play Again!";
      msg.style.backgroundColor = "purple";
}
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}



const playGame = (userChoice) =>{
    console.log("userChoice=",userChoice);
    const computerChoice = genComputerChoice();
    console.log("computerChoice=",computerChoice);

    if(userChoice=== computerChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //paper,scisssor;
        userWin = computerChoice==="paper"?false:true;
    } else if(userChoice==="paper"){
        //rock,scissor;
        userWin = computerChoice==="scissor"?false:true;
    }else{
        //rock,paper;
        userWin = computerChoice==="rock"?false:true;
    }
        showWinner(userWin);
        
    }
};


choices.forEach((choice) => {
choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);

})
})


