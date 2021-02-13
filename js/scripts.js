//Business Logic

const array = [];
function neighbor(input) {
  for(let number = 0; number <= input; number++) { 
      number = number.toString();
      if(number.includes("3")) {
        array.push("Won't you be my neighbor?");
    } else if(number.includes("2")) {
        array.push("Boop!");
    } else if(number.includes("1")) {
        array.push("Beep!");
    } else {
        array.push(number);
    }
      number = parseInt(number);
  } 
  return array;
}

//User interface logic

$(document).ready(function() {
  $("#form-group").submit(function(event) {
    event.preventDefault();
    let userInput = $("#number").val();
    document.getElementById("output").innerHTML = neighbor(userInput);
  });
});
