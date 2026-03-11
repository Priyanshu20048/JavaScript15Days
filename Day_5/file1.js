// Functions 
console.log("Happy Birthday");

// function is a block of code which performs a specific task

function singHappyBirthday(){
    console.log("Happy Birthday to you ....");
}

singHappyBirthday();

// Adding 2 +4 
// defining the function
function twoplusfour(){
    console.log(2+4);
}

// calling the function
twoplusfour();
// we can call the function multiple times


// returning a value from function
function sum(){
    return 2+5;
}
const returned = sum();
console.log(returned);

// function with parameters
// parameters are the names listed in the function definition
function Sum2(num1,num2){
    return num1+num2;
}
const returned2 = Sum2(17,3);

// arguments are the real values passed to the function example 17 and 3

const  returned3 = Sum2();
console.log(returned3); // NaN

// if we do not pass any arguments the value of parameters become undefined
// undefined + undefined = NaN

console.log(returned2); // 20


//  isEven number checker
function isEven(num1){
    if (num1%2 === 0){
        return true;
    }
    return false;

}
console.log(isEven(90));


// return the first character of striing 
function firstCh(string1){
    return string1[0];
}
console.log(firstCh("Bharti"));


// return index of array if target s present 

function target(array1,num1){
    for (let arr in array1){
        if (array1[arr] === num1){
            return arr;
        }
    }
}
array1 = [1,2,3,4,5,6];
console.log(target(array1,5));

// return statement ends the function execution

//------------------------------------------------

// function expression 
// function without name is called anonymous function
// we can store function in a variable this is called function expression

const singHappyBirthday2 = function(){
    console.log("Happy Birthday to you ....");
}
singHappyBirthday2();
