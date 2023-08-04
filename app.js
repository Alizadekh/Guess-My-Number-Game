let randomNumber = Number(Math.floor(Math.random() * 20));
randomNumber != 0;

document.querySelector(".check").addEventListener("click", function () {
  // ----------------------------------------------------------------
  const inputarea = document.querySelector(".inputarea");
  const info = document.querySelector(".info");
  const hidenum = document.querySelector(".hidenum");
  const scoreValue = document.querySelector(".scorevalue");
  const highScore = document.querySelector(".highscore");

  // When there is no input
  if (!inputarea.value) {
    info.textContent = "Please, guess number!";
  }

  //When player won the game
  else if (inputarea.value == randomNumber) {
    info.textContent = "Great! You are right!";
    hidenum.textContent = `${randomNumber}`;
    scoreValue.textContent = `${Number(scoreValue.textContent) + 1}`;
    document.querySelector("body").style.backgroundColor = "blue";

    if (Number(scoreValue.textContent) > Number(highScore.textContent)) {
      highScore.textContent = `${scoreValue.textContent}`;
    }
  }

  // When input too high
  else if (inputarea.value > randomNumber) {
    info.textContent = "Please, guess low number";
    scoreValue.textContent = `${Number(scoreValue.textContent) - 1}`;
    if (scoreValue.textContent == 0) {
      info.textContent = "You lost the game! 🎃";
    }
    scoreValue.textContent == "0";
  } else {
    info.textContent = "Please, guess high number";
    scoreValue.textContent = `${Number(scoreValue.textContent) - 1}`;
    if (scoreValue.textContent == 0) {
      info.textContent = "You lost the game! 🎃";
    }
    scoreValue.textContent == "0";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  const inputarea = document.querySelector(".inputarea");
  const info = document.querySelector(".info");
  const hidenum = document.querySelector(".hidenum");
  const scoreValue = document.querySelector(".scorevalue");

  randomNumber = Number(Math.floor(Math.random() * 20));
  randomNumber !== 0;

  inputarea.value = "";
  info.textContent = "Start guessing...";
  hidenum.textContent = "?";
  scoreValue.textContent = "20";
  document.querySelector("body").style.backgroundColor = "";
});
