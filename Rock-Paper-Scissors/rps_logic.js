function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
  }
  
function startRound(selection) {
  const roundResults = [];
    console.log(selection);
    playRound(selection, getComputerChoice());
    const computerSelection = getComputerChoice();
    const playerSelection = selection;
    const result = playRound(playerSelection, computerSelection);

    console.log(result);
// Assuming you have an existing div with the id "computerSelection"
const computerSelectionDiv = document.getElementById('computerSelection');
const roundResult = document.getElementById('roundResult');
// Setting innerHTML to include a paragraph with the desired text and the value of the 'result' constant
computerSelectionDiv.innerHTML = '<p>Computer\'s Choice: ' + computerSelection + '</p>';

roundResult.innerHTML = '<p>' + result + '</p>';
console.log("Player's Choice: " + playerSelection);


const leaderboardResultsDiv = document.getElementById('leaderboard-results');
roundResults.push(result);

leaderboardResultsDiv.innerHTML = '<p>' + roundResults + '</p>';
}

  function playRound(playerSelection, computerSelection) {
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
    if (rules[playerSelection] === computerSelection) {
      return 'Player Wins!!';
    }
    return 'Player lost!';
  }
  
  function game(rounds) {
  
  
    for (let i = 0; i < rounds; i++) {



    }
  }
  game(1);