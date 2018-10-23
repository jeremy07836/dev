const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors') {
    console.log(`User choose: ${userInput}`);
    return userInput;
  } else {
    return console.log('Error.');
  }
}

const getComputerChoice = () => {
  switch(Math.floor(Math.random()*3)){
    case 0:
      console.log('Computer choose: rock');
      return 'rock';
      break;

    case 1:
      console.log('Computer choose: paper');
      return 'paper';
      break;

    case 2:
      console.log('Computer choose: scissors');
      return 'scissors';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'The Game is a tie';
  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer Won';
    } else return 'User Won';
  };

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer Won';
    } else return 'User Won';
  };
  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer Won';
    } else return 'User Won';
  };
};

console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));
console.log(determineWinner(getUserChoice('scissors'), getComputerChoice()));
