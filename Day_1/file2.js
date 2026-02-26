// ctrl +shift +j -> shortcut to open console 


// in html file add <script src="file1.js"></script> before </body> tag to link this js file to html file and after <body > tag
// if you want to add it vefore the body tag then use defer attribute in script tag like <script src="file1.js" defer></script>
 
// Printing hello world 
console.log ("hello world");
// you can also use single quotes
console.log ('hello world');
// backsticks can also be used but they are mainly used for template literals
console.log (`hello world`);
// semicolon is optional in javascript but it is a good practice to use it

// -----------Introduction to variable 
// variable is a container to store data values , information 
// declare a variable 
var myname = "Priyanshu";

// use the variable
console.log (myname);

// case sensitivity

// change the value of variable
 myname = "John";
console.log (myname);

// var mei same varible redeclare krne pr purani value overwrite ho jati hai but memory mei variable ek hi hota hai

// use strict 

// hum bina var use kiye bina variable declare  kr skte hai 
firstName = "Mittal"k;
console.log(firstName);
 // chnage value 
 firstname = "Mittu";
    console.log(firstName);

    // yaha humne variable ki value chnage krne ki koshish ki but variable case sensitive hai to isliye ye naya variable ban gaya jiska naam firstname hai jo ki alag hai firstName se
    // to solve this problem hum chhate hai ki agr mene var nhi likha toh variable declare na ho 
    // iske liye hum "use strict" likhte hai file ke starting me
    // it protects us from errors like this now after ij script mode it will show error if we try to declare variable without var keyword

    // rules for naming a variable
// 1. you cannot start with a number
// var 1name = "Priyanshu"; // invalid
var name1 = "Priyanshu"; // valid

// 2. you can use _ or $ sign only 
var _name = "Priyanshu"; // valid
var $name = "Priyanshu"; // valid

// 3. you cannot use spaces
// var my name = "Priyanshu"; // invalid
var my_name = "Priyanshu"; // valid

// 4. cannot use reserved keywords
// convention -> small letters and camelCase
var myFirstName = "Priyanshu"; // valid

// snake_case -> all small letters with _ between words
var my_first_name = "Priyanshu"; // valid

//----------Let Keyword 
// let is also used to declare variable
let city = "New York";
console.log (city);
// change the value of variable
city = "Los Angeles";
console.log (city);
// re-declaring the variable using let will give error

// Note :- most preferable way to declare variable is using let keyword

// ----------Const Keyword
// it s used where the value  of variable  is fixed and cannot be changed 
// for example , pi value is always constant
const pi = 3.14;
console.log (pi);
// trying to change the value of const variable will give error
// pi = 3.14159; // error
// console.log (pi);
// you can do mathematical operations with const variable
const radius = 5;
const area = pi * radius * radius;
console.log (area);
// you cannot re-declare const variable
// const pi = 3.14159; // error
// console.log (pi);
// Note :- use const when you are sure that the value of variable will not change
