// One person from your pair start a github repo called JSreviewday -follow directions on github workflow document “I’m just starting a new project.”
//
// Plan out strategy and pseudo code first.  Leave stretch goals for when you finish all base challenges.
//
// Try without Googling first.  Then only google ideas or methods not the actual challenge.
//
// Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).
//
// Hint:
// you do not need any loops
//
// Var testWord1 = “nomad”
// expected output = “no nomad is not a palindrome”
//
// STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
// var testSentence1 = "Nomad DaMon"
// expected output:  "yes Nomad DaMon is a palindrome"
//
// //Creating a function that returns a string

// var = "nomad"

function palindrome (string) {
  console.log(string);
  var compare = string.split("").reverse().join("")
  console.log(compare);
  // var reverse = split.reverse()
  // console.log(reverse);
  // var join = reverse.join("")
  // console.log(join);
  if(string === compare){
    console.log(string = " is a palindrome.");
  } else {
    console.log(string + " is not a palindrome.");
  }
}
palindrome("nomad")







//
//
// //Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates
//
// // hint: you will need a loop
// // hint: use the .includes() method
//
// var a = [1, 2, 3, 30, 17];
// var b = [2, 30, 1, 15, ];
// //expected output [1, 3, 2,  17, 15]
//











//
// STRETCH:  copy/paste and refactor function to take in more than two arrays.
//
// var a = [1, 2, 3, 30, 17];
// var b = [2, 30, 1, 15, ];
// var c = [2, 10, 19, 1, 3]
// var d = [1, 3, 40, 32, 3]
// //expected output [3, 17, 15, 10, 19, 40, 32]










// //Create a function that takes in a sentence and returns only the consonants (removes the vowels).
//
// // hint: you will need a loop
// // hint: use the .includes() method
//
// var testSentence1 = “This website is awesome!”
// //expected output = “Ths wbst s wsm!”
//
//
//
//
//
//
