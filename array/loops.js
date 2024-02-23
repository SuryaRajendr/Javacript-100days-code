// const arr = {
//   a:'1',
//   b:'2',
//   c:'3',
//   d:'4'
// };

// const arr = [1,2,3,4]
const arr = [1,2,3,4]
for (let i in arr) {
  console.log("for in ===>",i)
}

for (let i of arr) {
  console.log("for of ===>",i)
}

//declaring a object employee 
const courses = { 
    firstCourse: 'JavaScript', 
    secondCourse: 'React', 
    thirdCourse: 'Angular'
}; 
let value = ''; 

//using for in loop 
for (let item in courses) { 
    // value += courses[item] + " "; 
  console.log(item)
} 
for (let item of courses) { 
  console.log(item)
} 
console.log(value);