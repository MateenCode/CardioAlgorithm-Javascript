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
    .toLowerCase() // Make sure sentence is lowercased
    .split(" ") // split up each word in sentence
    .map(word => word[0].toUpperCase() + word.substring(1)) // map each word uppercase first letter add rest
    .join(" "); // rejoin words
}
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const letterMap = {};
  let maxNum = 0; // that number its self
  let maxChar = ""; // number that has the most occurrences
  // loop through each letter
  str.split("").forEach(letter => {
    if (letterMap[letter]) {
      // if character exists add 1 to it
      letterMap[letter]++;
    } else {
      // if its not found make it 1
      letterMap[letter] = 1;
    }
  });
  // looping in charMap object to look for the greatest number
  for (let letter in letterMap) {
    // if charMap is greater then maxNum
    if (letterMap[letter] > maxNum) {
      // set the value of maxNum to the charMap value it self
      maxNum = letterMap[letter];
      // set the maxChar to that character with the most
      maxChar = letter;
    }
  }
  return maxChar;
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
