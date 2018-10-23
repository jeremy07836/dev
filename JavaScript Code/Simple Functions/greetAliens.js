const greetAliens = (strArray) => {
  strArray.forEach((name)=>{
    console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`);
  });
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);
