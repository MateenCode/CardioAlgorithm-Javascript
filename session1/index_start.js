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
    .toLowerCase() // confirm all letters are lower case
    .split(" ") //split up every word as array object in sentence
    .map(word => word[0].toUpperCase() + word.substring(1)) // takes first index of each array object and capitalizes it
    .join(" "); // rejoins sentence
}
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const letterMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(letter => {
    if (letterMap[letter]) {
      letterMap[letter]++;
    } else {
      letterMap[letter] = 1;
    }
  });

  for (let letter in letterMap) {
    if (letterMap[letter] > maxNum) {
      maxNum = letterMap[letter];
      maxChar = letter;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call Function
const output = fizzBuzz();

console.log(output);
