// CHALLENGE 1: LONGEST WORD
// Return the longest word or words of a string
// ex. longestWord('Hi there, my name is Mateen') === 'there,' .match(/[a-z0-9]+/g)
function longestWord(sen) {
  // make sure sen is lowercase and removed anything not letter or number
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // sort by longest first
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // filter out if there more then one word with same length
  const longestWord = sorted.filter(word => word.length === sorted[0].length);
  // return if single word or array if more then one =
  return longestWord.length === 1 ? longestWord[0] : longestWord;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
  const chunkedArr = [];
  arr.forEach(each => {
    const last = chunkedArr[chunkedArr.length - 1];

    return !last || last.length === len
      ? chunkedArr.push([each])
      : last.push(each);
  });
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
  return arrays.reduce((acc, curr) => [...acc, ...curr]);
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
