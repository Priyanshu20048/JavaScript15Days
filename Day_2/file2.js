// Boolean and comparison operations
// bolean can have only two values: true or false
// default value of boolean :- undefined

let num1= 7;
let num2 = 7;
num1> num2;
console.log(num1 >= num2); // true

// == vs ===
num2= "7";
// == -> checks for value equality 
console.log(num1==num2); // true
// === -> checks for value and type equality
console.log(num1===num2); // false


// != vs !==
num2 = 7;
// != -> checks for value inequality
console.log(num1 != num2); // false
num2 = 8;
console.log(num1 != num2); // true
num2= "7";
console.log(num1 != num2); // false

// !== -> checks for value and type inequality
console.log(num1 !== num2); // true
