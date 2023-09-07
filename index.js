const moves = ['rock','paper','scissors'];

const getComputerMove = () => moves[Math.floor(Math.random()*3)];

const decideWinner = moves => {
  switch (moves) {
    // Wins
    case 'rockscissors':
      return "You Win! Rock beats Scissors";
    case 'paperrock':
      return "You Win! Paper beats Rock";
    case 'scissorspaper':
      return "You Win! Scissors beats Paper";
    // Losses
    case 'rockpaper':
      return "You Lose! Paper beats Rock";
    case 'paperscissors':
      return "You Lose! Scissors beats Paper";
    case 'scissorsrock':
      return "You Lose! Rock beats Scissors";
    // Error
    default:
      return "That wasn't right... Enter either rock, paper, or scissors!"
  }
}

const playRound = (playerMove, computerMove) => (playerMove === computerMove) ? 'Draw!' : decideWinner(playerMove+computerMove);

function game(n) {
  for (let i = 0; i < n; i++) 
    alert(playRound(prompt(`Round ${i+1}/${n}:\nWhat is your move (rock, paper, scissors)?`), getComputerMove()));
}

game(5);


