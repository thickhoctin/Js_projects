//console.log('hi');

// funtion take in user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  console.log();
  if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors'){
    return "Please choose rock, paper or scissors";
  }
  return userInput;
}

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  switch(choice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      break;
  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'Tie!'
  }
  else if(userChoice === 'paper' && computerChoice === 'scissors'){
    return 'Commputer won!'
  } else if(userChoice === 'scissors' && computerChoice === 'rock'){
    return 'Commputer won!'
  } else if(userChoice === 'rock' && computerChoice === 'paper'){
    return 'Commputer won!'
  } else {
    return 'User won!'
  }
  return 'Invalid!'
}
function playGame(){
  let user = getUserChoice('paper');
  let computer = getComputerChoice();
  console.log(`User: ${user}, Computer: ${computer}, Result: ${determineWinner(user, computer)}`)
}
playGame()
