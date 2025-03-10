 
 //  it will select computer's move
 let getComputerMove = () => {
    let computerNumber = Math.random(); // generate the number from 0 to 0.99999... but never 1
    
    let  computerChoice = '';
    if( computerNumber <= 0.3){
        computerChoice = "Rock";
    }else if(computerNumber <= 0.6){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissor"
    }
    
   return computerChoice;
 }


 // it will select player's move
 const moveOfPlayer = () => {
    const Rock = document.querySelector("#Rock");
    Rock.addEventListener("click", () => {
        playGame("Rock");
    })

    const Paper = document.querySelector("#Paper");
    Paper.addEventListener("click", () => {
        playGame("Paper");
    })

    const Scissor = document.querySelector("#Scissor");
    Scissor.addEventListener("click", () => {
        playGame("Scissor");
    })
    
 }; 

let playerScore = 0;
let computerScore = 0;

// show score on screen when player is inactive
let scoreResult = document.createElement("p");
 scoreResult.style.fontSize = "1.5rem"
scoreResult.innerText = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

//it is appending the result
let showResult = document.querySelector("#result");
showResult.prepend(scoreResult);


 function playGame(playerMove){
    const computerMove = getComputerMove();
    let result = document.querySelector("#jsResult");
    let move = document.querySelector(".App-result");

    move.innerText = `you: ${playerMove}
     comp: ${computerMove}`;

     // condition of game + increasing the score 
        if (playerMove === computerMove) {
            result.innerText = "Match is Drawn";
        } else if (
            (playerMove === "Rock" && computerMove === "Scissor") ||
            (playerMove === "Paper" && computerMove === "Rock") ||
            (playerMove === "Scissor" && computerMove === "Paper")
        ) {
            result.innerText = "You win!"
            playerScore++;
        } else {
            result.innerText = "You loose!";
            computerScore++;
        }
      

    // styling the result dynamically
        if(result.textContent === "You win!"){
            result.style.color = "green"
            result.style.fontSize = "2.6rem"
        }else if(result.textContent === "You loose!"){
            result.style.color = "red"
            result.style.fontSize = "1.8rem"
        }else{
            result.style.color = "black"
            result.style.fontSize = "2rem"
        }
    
    scoreResult.innerText = `Your Score: ${playerScore} | Computer Score: ${computerScore}`;
 }

 moveOfPlayer();

//   setInterval(() => {
//     alert("_you can Restart_")
//   }, 60000);
  

