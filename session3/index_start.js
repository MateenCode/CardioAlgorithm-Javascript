// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// '...' the rest operator takes all the numbers being passed and stores it into a array
function addAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  for (let i = 2; i <= num; i++) {
    checkforPrime = i => {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          return false;
        }
      }
      return true;
    };

    if (checkforPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}

// CHALLENGE 7: Find Number
// Find if the element is present in the array or not.
// ex.
// findNumber([1,2,3,4,5], 1) === YES
// findNumber([1,2,3,4,5], 7) === NO
function findNumber(arr, k) {
  return arr.some(word => word === k) ? console.log("YES") : console.log("NO");
}

// CHALLENGE 8: Odd Numbers
// find the odd numbers between the 2 given ranges of input field
// ex.
// oddNumbers(2,5) === [3 5]
// oddNumbers(3,9) === [3,5,7,9]

function oddNumbers(l, r) {
  let arr = [];
  for (l; l <= r; l++) {
    arr.push(l);
  }
  return arr.filter(n => n % 2);
}

const output = sumAllPrimes(10);

console.log(output);
