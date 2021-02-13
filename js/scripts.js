const array = [];
function neighbor(input) {
  for(let number = 0; number <= input; number++) { 
      console.log(number.toString());
      if(number === 1) {
        array.push("Beep!");
    } else if(number === 2) {
        array.push("Boop!");
    } else if(number === 3) {
        array.push("Won't you be my neighbor?");
    } else {
        array.push(number);
    }
      console.log(parseInt(number));
    }
  return array;
}

console.log(neighbor(3));
