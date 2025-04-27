let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScr = document.querySelector("#user-Score");
let compscr = document.querySelector("#computer-score");
const drawGame = () => {
  msg.innerText = "Game Draw";
  msg.style.backgroundColor = "#273F4F";
};

const gencompchoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const showwinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScr.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#3D8D7A";
  } else {
    compScore++;
    compscr.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
  const compChoice = gencompchoice();
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
