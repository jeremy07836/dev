const getSleepHours = (day) => {
  switch(day.toLowerCase()){
    case 'monday':
      return 7;
      break;

    case 'tuesday':
      return 8;
      break;

    case 'wednesday':
      return 8;
      break;

    case 'thursday':
      return 8;
      break;

    case 'friday':
      return 7;
      break;

    case 'saturday':
      return 9;
      break;

    case 'sunday':
      return 9;
      break;
  }
}

const getActualSleepHours = () => {
  var total = 0;
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days.forEach(function (element) {
    //console.log(element);
    total += getSleepHours(element);
  });

  return total;
}

const getIdealSleepHours = (hours) => {
  var idealHours = hours;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(10);
  var sleepDifference = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours){
    console.log('Perfect sleep amount');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Got more sleep than needed');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('Need to get more sleep');
  };

  console.log(`Overslept ${sleepDifference}`);
}

//var day = 'Tuesday';
//var sleep = getSleepHours(day);
//console.log(`I got ${sleep} hours of sleep on ${day}`);

calculateSleepDebt();
