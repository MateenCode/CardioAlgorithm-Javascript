/* 
USE FUNCTIONAL PROGRAMING CONCEPTS! 
*/

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revStr = str
    .split("")
    .reverse()
    .join("");

  if (str === revStr) {
    return true;
  } else {
    return false;
  }
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return int
    .toString()
    .split("")
    .reverse()
    .join("");
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const sortedStr = str.split("").sort(); // splits each letter of the word and sorts it in all
  const maxChar = { char: "", count: 0 }; // object that stores the max char and count
  const currentChar = { char: "", count: 0 }; // object that store char and the current count

  sortedStr.forEach(char => {
    if (currentChar.char === char) {
      // checks current char with looped char
      currentChar.count++; // increment the count
    } else {
      if (maxChar.count < currentChar.count) {
        // check if the maxChar count is greater then then the currentChar count
        maxChar.char = currentChar.char; // set the maxchar char to the currentchar char
        maxChar.count = currentChar.count; // set the maxchar count to current char count
      }
      currentChar.char = char;
      currentChar.count = 0;
    }
  });
  return maxChar.char; // return the current char
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    let a = i % 3 ? (i % 5 ? i : "Buzz") : i % 5 ? "Fizz" : "FizzBuzz";
    console.log(a);
  }
}

// Call Function
const output = maxCharacter("javascript");

console.log(output);
