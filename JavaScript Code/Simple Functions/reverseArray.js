const reverseArray = (oldArray) => {
  const newArray = [];
  for(let i=oldArray.length-1; i>=0; i--){
    newArray.push(oldArray[i]);
  };
  return newArray;
};

const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));
