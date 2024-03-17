// Question 1: How do you create an empty array in JavaScript?

// let arr = []
// let arr2 = new array()

// Question 2: How do you access the first and last elements of an array?

const fruits = ["apple", "banana", "orange", "mango"];

// remove 'orange'

fruits.splice(2, 1);

console.log(fruits); // ['apple', 'banana', 'mango']

let arr = [1, 2, 3];

arr.splice(2, 1);

console.log(arr); // [1, 2]


console.log(2 + true); // 3 because true is 1 + - coercion
console.log('5' - - '3'); // 8
console.log(null == undefined); // true

function wordsWithMoreThanOneVowel(array) {
  // Define a function to count vowels in a word
  function countVowels(word) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      return word.split('').filter(char => vowels.includes(char.toLowerCase())).length;
  }

  // Filter words with more than one vowel
  return array.filter(word => countVowels(word) > 1);
}

// Example usage
const words = ["hello", "world", "apple", "banana", "hi", "bye"];
const result = wordsWithMoreThanOneVowel(words);
console.log("=========>",result);
