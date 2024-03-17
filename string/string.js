const str = "This, is a: test ? string";

// Remove all spaces, commas, and colons
//const newStr = str.replace(/[\s,:]/g, "");
const newStr = str.replace(/[\s,:?]/g, "");

console.log(newStr); // "Thisisateststring"

let store = 5

console.log("store is number or not",isNaN("dgffhjgkjkl"))
console.log(typeof(store))
let convertedtoString = store.toString()
console.log("store is number or not",isNaN(convertedtoString))
console.log(typeof(convertedtoString))

let i = 1
console.log("================>",Math.floor(i/3))

let StudentName = "Rajesh"
console.log("Name",StudentName)
console.log(`Name`)
  console.log(`Name ${StudentName}`)
