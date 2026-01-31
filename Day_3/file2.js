// Methods of Array object
let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Note :- Arrays are mutable 

// push() :- adds one or more elements to the end of an array and returns the new length of the array
fruits.push("Grapes");
console.log(fruits);
// output: [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]

// pop() :- removes the last element from an array and returns that element
fruits.pop();
console.log(fruits);

// output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// pop also returns the removed element
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit); // Orange
console.log(fruits);
// output: [ 'Apple', 'Banana', 'Mango' ]

// unshift() :- adds one or more elements to the beginning of an array and returns the new length of the array
fruits.unshift("Strawberry");
console.log(fruits);
// output: [ 'Strawberry', 'Apple', 'Banana', 'Mango' ]

// multiple elements can be added
fruits.unshift("Pineapple", "Watermelon");
console.log(fruits);
// output: [ 'Pineapple', 'Watermelon', 'Strawberry', 'Apple', 'Banana', 'Mango' ]

// shift() :- removes the first element from an array and returns that element
let firstFruit = fruits.shift();
console.log("First fruit removed:", firstFruit); // Pineapple
console.log(fruits);
// output: [ 'Watermelon', 'Strawberry', 'Apple', 'Banana', 'Mango' ]

// push and pop are faster than unshift and shift
// because unshift and shift need to re-index all the elements in the array

