const convertToBaby = (array) => {
  const babyArray = [];
  for(let i=0; i<array.length; i++){
    babyArray[i] = 'baby ' + array[i];
  };
  return babyArray;
};


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals))
