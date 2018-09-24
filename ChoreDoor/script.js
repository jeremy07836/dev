let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let currentlyPlaying = true;
var numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if(door === botDoorPath){
    return true;
  } else {
    return false;
  };
};

const isClicked = (door) => {
  if(door === closedDoorPath){
    return false;
  } else {
    return true;
  }
};

const playDoor = (door) => {
	numClosedDoors --;
  if(numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door)) {
    gameOver();
  };
};

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  };
  currentlyPlaying = false;
};

const randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  } else if(choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  };

};


doorImage1.onclick = () => {
  if(isClicked() && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(openDoor1);
  };
};

doorImage2.onclick = () => {
  if(isClicked() && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(openDoor2);
  }
};

doorImage3.onclick = () => {
  if(isClicked() && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(openDoor3);
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

startButton.onclick = () => {
  if(!currentlyPlaying){
  	startRound();
  };
};

startRound();
