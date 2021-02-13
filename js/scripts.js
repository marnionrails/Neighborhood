const array = [];
function neighbor(input) {
  for(let number = 0; number <= input; number++) { 
    if(number === 1)
      array.push("Beep!");
    else {
      array.push(number);
    }
  }
  return array;
}

console.log(neighbor(1));
