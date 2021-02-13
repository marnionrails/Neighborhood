const array = [];
function neighbor(input) {
  for(let number = 0; number <= input; number++) { 
      number = number.toString();
      if(number.includes("1")) {
        array.push("Beep!");
    } else if(number.includes("2")) {
        array.push("Boop!");
    } else if(number.includes("3")) {
        array.push("Won't you be my neighbor?");
    } else {
        array.push(number);
    }
      number = parseInt(number);
    }
  return array;
}

console.log(neighbor(10));
