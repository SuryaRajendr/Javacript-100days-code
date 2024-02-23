const str = "This, is a: test ? string";

// Remove all spaces, commas, and colons
//const newStr = str.replace(/[\s,:]/g, "");
const newStr = str.replace(/[\s,:?]/g, "");

console.log(newStr); // "Thisisateststring"