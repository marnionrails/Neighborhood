const array = [];
function neighbor(input) {
  for(let number = 0; number <= input; number++) { 
    array.push(number);
    console.log(number);
  }
  return array;
}

console.log(neighbor(3));
