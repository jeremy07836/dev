const dogFactory = (name, breed, weight) => {
  if(typeof name === 'string' && typeof breed === 'string' && typeof weight === 'number'){
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() { return this._name; },
      set name(newName) { this._name = newName; },
      get breed() { return this._breed; },
      set breed(newBreed) { this._breed = newBreed; },
      get weight() { return this._weight; },
      set weight(newWeight) { this._weight = newWeight; },
      bark() { return 'ruff! ruff!'; },
      eatTooManyTreats() { this._weight++; }
    };
  } else{
    return false;
  };
};

const dog = dogFactory('billy', 'mut', 5);
dog.bark();
dog.eatTooManyTreats();
console.log(dog);
