// Hoisting 

hello();

function hello(){
    console.log("My name is BHarti ");
}

// this functions runs even i have called it before its declaration
// this is because of hoisting
// this is done ony in function declaration not in function expression

//-------------------------------------------------------
// function expression

const hello2 = function (){
    console.log("not possible");
}
hello2();

// this will give error if we call it before its declaration
// because in function expression the function is stored in a variable
// and variables are not hoisted
// so we cannot call the function before its declaration in function expression

//-------------------------------------------------------
console.log(he); // gives undefined 
var he = "mmm";
console.log(he); // mmm

// but this will give error in case of let and const 



