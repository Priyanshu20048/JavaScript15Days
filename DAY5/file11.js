// function returning function 

function Myfunc(){
    return "a";
}
const ans = Myfunc();
console.log(ans);

// you can return anything 

function myFunc1(){
    function hello(){
        console.log("hello world from returning function");
    }
    return hello;

}
const ans1 = myFunc1();
console.log(ans1);
// ans1 is now the hello function

// you can call this ans1 as function now 
ans1(); // hello world from returning function

// another way
function myFunc2(){
    function hello(){
        return "hello world from returning function";
    }
    return hello;

}

const ans2 = myFunc2();
ans2();// print nothing as hello returns a string but we are not printing it
console.log(ans2());// now it will print the returned string

// Note :- if you are accepting a function as parameter or returning a function from another function or both then these functions are called higher order functions
// Example of higher order function

function greet(){
    return function(){
        console.log("hello world from greet function");
    }
}
const ans3 = greet();
ans3(); // hello world from greet function

// or you can do this in single line

greet()(); // hello world from greet function

// here greet() returns a function and then we are calling that returned function using another ()
// so greet()() calls the inner function directly
