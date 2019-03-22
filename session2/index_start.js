// CHALLENGE 1: LONGEST WORD
// Return the longest word or words of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // makes sure sen lowercase and removes anything that not number or letter
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // sort that wordArr by length and have the longest word first
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // filter each word in array to see if there more then one with the same length
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // check if theres more then 1 item in array if only 1 just return the single word else return the entire array
  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init empty chunkedArr
  const chunkedArr = [];

  arr.forEach(eachVal => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      chunkedArr.push([eachVal]);
    } else {
      last.push(eachVal);
    }
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // acc is the looped value, curr is the current value which is being concatenated
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Anagrams are word with the same length of charaters and can be rearranged to make new word
function isAnagram(str1, str2) {
  // call back the helper function and check if str1 formated is equal to string 2 formated
  return formatStr(str1) === formatStr(str2);
}

// Helper Function
formatStr = str => {
  return str
    .replace(/[^\w]/g, "") // replace anything that doesnt match a word character with a empty string
    .toLowerCase() // make sure input string is lowercase
    .split("") // split up each letter
    .sort() // sort the strings
    .join(""); // join back the letters
};

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}

// Call Function
const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);
