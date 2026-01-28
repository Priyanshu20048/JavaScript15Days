// Taliking deep about null
let address = null;
console.log (typeof address); // object (this is a bug in javascript)
// this bug exits because millions of people were using null as an object reference in the early days of javascript
// if this bug were to be fixed today, it would break a lot of existing code
// therefore, it has been kept for backward compatibility
// null is used to represent the intentional absence of any object value
// it is often used to indicate that a variable should not point to any object 

// BigInt :- 
in javascript , number type can only represent numbers up to a certain limit (2^53 - 1)
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1
// BigInt can be created by appending 'n' to the end of an integer or by calling the BigInt() constructor
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt1);
console.log(bigInt2);
// you can also store smaller numbers in BigInt format
let smallBigInt = 42n;
console.log(smallBigInt);
// BigInt supports standard arithmetic operations like addition, subtraction, multiplication, and division
let bigIntSum = bigInt1 + bigInt2;
console.log(bigIntSum);
// however, BigInt cannot be mixed with regular Number types in operations
// let invalidOperation = bigInt1 + 10; // This will throw a TypeError
// To convert a BigInt to a Number, you can use the Number() constructor
let bigIntToNumber = Number(bigInt1);
console.log(bigIntToNumber);
// To convert a Number to a BigInt, you can use the BigInt() constructor
let numberToBigInt = BigInt(42);
console.log(numberToBigInt);
