// type of Operator 

// data type :- 
// 1. Primitive data type
// 2. Non-primitive data type
// Primitive data type :-
// 1. Number
let age = 25;
console.log (typeof age); // number
// 2. String
let name = "Priyanshu";
console.log (typeof name); // string
// 3. Boolean
let isStudent = true;
console.log (typeof isStudent); // boolean
// 4. Undefined
// you cant have constant variable with undefined value
// const score ; is invalid
let score;
console.log (typeof score); // undefined

// 5. Null

// 6. Symbol
// 7. BigInt
// Non-primitive data type :-

// type of operator is used to find the data type of a variable or value
// syntax :- typeof  variableName or typeof value
let percentage = 85.5;
console.log (typeof percentage); // number
let isPassed = false;
console.log (typeof isPassed); // boolean
let city;
console.log (typeof city); // undefined

// convert number to string
let marks = 90;
let marksString = String(marks);
console.log (typeof marksString); // string

// Note :- Shortcut for this
// add empty string to number to convert it to string
let marksStr = marks + "";
console.log (typeof marksStr); // string
// now 90 -> "90"

// convert string to number
let strNum = "100";
console.log (typeof strNum); // string
let num = Number(strNum);
console.log (typeof num); // number
// Shortcut for this
// add + sign before string to convert it to number
let num2 = +"200";
console.log (typeof num2); // number
// now "100" -> 100
// "200" -> 200
// if string is not a valid number then it will return NaN
//e.g.
let invalidStr = "hello";
let invalidNum = Number(invalidStr);
console.log (invalidNum); // NaN
let invalidNum2 = +invalidStr;
console.log (invalidNum2); // NaN

// NaN stands for Not a Number

// doubt :- what is the type of NaN
console.log (typeof NaN); // number
// NaN is of type number
// because it is a special value in number type that represents an invalid number
// e.g. result of invalid mathematical operation
// like 0/0 , infinity - infinity etc.
// if wehav to do write a line like harshit ia type of string using temlate literals 
// let personName = "Harshit";
// console.log (`${personName} is of type ${typeof personName}`); // Harshit is of type string