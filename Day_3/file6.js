// use const for creating array

const fruits = ["apple","mango"];
fruits.push("pear");
console.log(fruits); // ['apple', 'mango', 'pear']

// here no error because we are not changing the reference of array
// we are only modifying the array by adding an element
// if we try to change the reference of array then error aayega

// fruits = ["banana","grapes"]; // error
// console.log(fruits); // uncaught TypeError: Assignment to constant variable.

// mostly const is used to create array

// use let for creating array as it allows modification and re-assignment
