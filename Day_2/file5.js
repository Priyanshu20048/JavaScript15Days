//-------------Ternary Operators ----
let age = 15;
// if we want to store the value of drink using conditon 
// for example if age >=5 store milk else store coffee
let drink ;
if (age >= 5){
    drink = "coffee";


}
else {
    drink = "milk";
}

console.log(drink);

// you can do this in shortcut using ternary operators 
// ternary operators are also called conditional operators
let age1= 8;
let drink1 = age >=5 ? "coffee" : "milk";

// condition check after then 
// if true ? statement will execute 
// if false  : statement will be executed 

// teranry can have multiple condition  also 

// 1. nested 
let a = 0;
let result = a >0 ? "Positive " : a <0 ? "Negative " : " Zero ";
console.log(result); // Zero

// 2. using logical operators
let result1 = (a>0 && a <20) ? "valid " : " invalid ";
console.log(result1); // valid
// if both conditions are true then valid else invalid
