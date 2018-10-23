let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var age = 18;

if(registeredEarly && age >= 18){
  raceNumber += 1000;
};

if(registeredEarly && age >= 18){
  console.log(`${raceNumber} Race starts at 9:30 am`);
} else if(!registeredEarly && age >= 18){
  console.log(`${raceNumber} Race starts at 11:00 am`);
} else if(age < 18) {
  console.log(`${raceNumber} Race starts at 12:30 pm`);
};
