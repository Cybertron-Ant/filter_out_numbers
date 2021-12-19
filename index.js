//take user input as a string
var sentence1 = prompt("Enter a sentence or word that includes numbers")

//declare a function that takes only one parameter
function takeOutNumbers(sentence) {
  //create a regular expression to match only numbers
  var numbers = new RegExp(/[\d+]/g);

  //replace all numbers with a empty space
  var wordsOnly = sentence.replace(numbers, "");

  //show a sentence or word that contains no numbers
  console.log(wordsOnly)
}

//call function and pass user input as an argument
takeOutNumbers(sentence1)