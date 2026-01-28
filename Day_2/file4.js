// if else conditional statements in JavaScript
let age = 18;
if (age >= 18){
    console.log("can play");}
        else {
            console.log("cant");
}

let num =14 ;{
    if (num % 2 ==0){
        console.log("even");
    }
    else {
        console.log("odd");
    }

}

// nested if - else 
// winning number = 19
// 19 -> your guess is right;
// 17 -> too low 
// 20 -> too high 

// let winning = 19;
// let userguess = +prompt("Guess a number :- ");
// // prompt :- used to take input from the user
// //  it takes input into a string only 
// // you have to convert the string to number ;
// if (userguess === winning){
//     console.log("U Won");

// }
// else{

//  if (userguess >winning){
//     console.log("too high");
// }
// else {
//     console.log("too low");
    
// }}

// if 
// else if 
// else if 
// else 

    let temp  = 15;
    if (temp >40){
        console.log("too hot");
    }
    else if (temp >30){
        console.log("normal weather");
    }
    else if (temp >20){
        console.log("cool weather");
    }
    else {
        console.log("too cold");
    }
    console.log("byee");

    // in else if :- it checks the condition one by one from top to bottom
    // if any one condition becomes true the rest of the conditions are not checked
    // if none of the conditions are true else block is executed
