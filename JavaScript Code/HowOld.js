const howOld = (age, year) => {
  if((2018 - age) > year) {
    return `The year ${year} was ${((2018 - year) - age)} years before you were born`;
  };

  if(year > 2018) {
    return `You will be ${(age + (year - 2018))} in the year ${year}`;
  };

  if(year < 2018) {
    return `You were ${(age - (2018 - year))} in the year ${year}`;
  }
};

console.log(howOld(25, 2000));
