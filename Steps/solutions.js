step1 = {
  // const choices = document.querySelectorAll(".choice");
  // const score = document.getElementById("score");
  // const result = document.getElementById("result");
  // const restart = document.getElementById("restart");
  // const modal = document.querySelector(".modal");
  // const scoreboard = {
  //   player: 0,
  //   computer: 0
  // };
};
step2 = {
  // function play(e) {
  //   restart.style.display = "inline-block";
  //   const playerChoice = e.target.id;
  // }
  // // Event Listeners
  // choices.forEach(choice => choice.addEventListener("click", play));
};
step3 = {
  // function play(e) {
  //   restart.style.display = "inline-block";
  //   const playerChoice = e.target.id;
  //   const computerChoice = getComputerChoice();
  // }
  // function getComputerChoice() {
  //   const rand = Math.random();
  //   if (rand < 0.34) {
  //     return "rock";
  //   } else if (rand <= 0.67) {
  //     return "paper";
  //   } else {
  //     return "scissors";
  //   }
  // }
};
step4 = {
  // function play(e) {
  //   restart.style.display = "inline-block";
  //   const playerChoice = e.target.id;
  //   const computerChoice = getComputerChoice();
  //   const winner = getWinner(playerChoice, computerChoice);
  // }
  // function getWinner(p, c) {
  //   if (p === c) {
  //     return "draw";
  //   } else if (p === "rock") {
  //     if (c === "paper") {
  //       return "computer";
  //     } else {
  //       return "player";
  //     }
  //   } else if (p === "paper") {
  //     if (c === "scissors") {
  //       return "computer";
  //     } else {
  //       return "player";
  //     }
  //   } else if (p === "scissors") {
  //     if (c === " rock") {
  //       return "computer";
  //     } else {
  //       return "player";
  //     }
  //   }
  // }
};
step5 = {
  // function play(e) {
  //   restart.style.display = "inline-block";
  //   const playerChoice = e.target.id;
  //   const computerChoice = getComputerChoice();
  //   const winner = getWinner(playerChoice, computerChoice);
  //   showWinner(winner, computerChoice);
  // }
  // function showWinner(winner, computerChoice) {
  //   if (winner === "player") {
  //     // inc player score
  //     scoreboard.player++;
  //     // show modal result
  //     result.innerHTML = `
  //     <h1 class="text-win">You Win</h1>
  //     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  //     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
  //     `;
  //   } else if (winner === "computer") {
  //     // inc player score
  //     scoreboard.computer++;
  //     // show modal result
  //     result.innerHTML = `
  //         <h1 class="text-lose">You Lose</h1>
  //         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  //         <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
  //         `;
  //   } else {
  //     result.innerHTML = `
  //     <h1>It's A Draw</h1>
  //     <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  //     <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
  //     `;
  //   }
  //   // Show Score
  //   score.innerHTML = `
  //     <p>Player: ${scoreboard.player}</p>
  //     <p>Computer: ${scoreboard.computer}</p>
  //     `;
  //   modal.style.display = "block";
  // }
};
step6 = {
  // function clearModal(e) {
  //   if (e.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
  // // Event Listeners
  // window.addEventListener("click", clearModal);
};
step7 = {
  // Event Listener
  // restart.addEventListener("click", restartGame);
  // function restartGame() {
  //   scoreboard.player = 0;
  //   scoreboard.computer = 0;
  //   score.innerHTML = `
  //   <p>Player: 0</p>
  //   <p>Computer: 0</p>
  //   `;
  // }
};
step8 = {
  // <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
};
