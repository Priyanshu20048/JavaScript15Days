// String Conactenation :- joining two or more strings together

let firstName = "Priyanshu";
let lastName = "Mittal";

// method 1 :- using + operator
let fullName = firstName + lastName;
console.log (fullName); // PriyanshuMittal
// here we have not added a space between firstName and lastName

// to add space we can do like this
let fullNameWithSpace = firstName + " " + lastName;
console.log (fullNameWithSpace); // Priyanshu Mittal


let string1 = "17";
let string2 = "23";
let result = string1 + string2;
console.log (result); // 1723
// here + operator is doing string conactenation not addition because both operands are strings
// to perform addition we have to convert strings to numbers
let result2 = +string1 + +string2; // converting strings to numbers using + operator
console.log (result2); // 40
// or we can use Number() function to convert strings to numbers

let result3 = Number(string1) + Number(string2);

// 2. method 2 :- using template literals (backticks ``)

let age = 22;
let myname = "Priyanshu Mittal";

// you have to make "my name is Priyanshu Mittal and my age is 22"

let aboutme = "my name is " + myname  + " and my age is " + age;
console.log (aboutme); // my name is Priyanshu Mittal and my age is 22

// using template literals
let aboutme2= `my name is ${myname} and my age is ${age}`
console.log (aboutme2); // my name is Priyanshu Mittal and my age is 22
// template literals make code more readable and easier to write

