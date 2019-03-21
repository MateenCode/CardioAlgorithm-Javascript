// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// Create filtered array
//  const wordArr = sen.toLowerCase().match(/[a-z0-10]+/g);

function longestWord(sen) {
  //  word array makes sen lowercase and removes anything that not number or letter
  const wordArr = sen.toLowerCase().match(/[a-z0-10]+/g);

  // sort by length longest word first
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // filter each word in array to see if there more then one with the same length
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  //  check if theres more then 1 item in array if only 1 just return the single word else return the entire array
  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = [];

  // looping through each key in the array
  arr.forEach(eachVal => {
    // getting the last value of chunked Arr
    const last = chunkedArr[chunkedArr.length - 1];

    // check if there is a last length or check if last length is equal to len passed in
    if (!last || last.length === len) {
      // if true push the eachVal to the chunked array
      chunkedArr.push([eachVal]);
    } else {
      // if not take last and push that to the eachVal
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
  return arrays.reduce((acc, curr) => curr.concat(acc));
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
    .sort() // sort he strings
    .join(""); // join back the letters
};

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord("Hi there, my namee is Brad");

console.log(output);
