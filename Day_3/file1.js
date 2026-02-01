//-----------------------Introduction to Arrays
 // Array :- ordered collection of items
 // If you have a list of items (a list of car names, for example),
 // Array :- reference type in JavaScript 
// all the reference type in javascript are considered as objects
// Array is  an object 

 // creating an array
 let fruits = ["Apple", "Banana", "Mango", "Orange"];
 console.log(fruits);
    // output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

    // you can store any type of data in an array and mix of data types as well


    // accessing array elements using index
    console.log(fruits[0]); // Apple
    console.log(fruits[2]); // Mango
    console.log(fruits[4]); // undefined (index out of bounds)


    // modifying array elements
    fruits[1] = "Kiwi";
    console.log(fruits);
    // output: [ 'Apple', 'Kiwi', 'Mango', 'Orange' ]

    // array length
    console.log(fruits.length); // 4
    // length property gives the number of elements in the array

// type of array
console.log(typeof fruits); // object

// checking if a variable is an array
// Array.isArray(variable); true / false 
console.log(Array.isArray(fruits)) // true 
