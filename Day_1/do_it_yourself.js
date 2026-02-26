// DAY 1 — DO IT YOURSELF PRACTICE
// Q1 :- Create a variable using const and store your full name.
// Print:My name is <your name>
// using template literals.
const myname = "Priyanshu";
console.log(`My name is ${myname}`);

// Q2 Take a string:
// "JavaScript"
// Print:
// first character
// last character
// length
    
var a = "JavaScript";
console.log(a[0]);
console.log(a[a.length-1]);
console.log(a.length);



// Q3 Convert:
// "   hello world   "
// into:
// HELLO WORLD
// (using string methods).

var str1 = "   hello world   ";
str1= str1.trim().toUpperCase();
console.log(str1);


// Q4 Check if string contains "Script" using a method.
     console.log(str1.includes("Script"));

// Q5  Given:
// let str = "FrontendDeveloper";
// Extract "Developer" using slicing.
    let str = "FrontendDeveloper";
    console.log(str.slice(8));

// Q6 Check if string starts with "Front".
     console.log(str.startsWith("Front"));
     // or 
     console.log(str.includes("Front",0));

// Q7 Create two variables:
// name
// age
// Print:
// My name is ___ and I am ___ years old.
// (using template literals only).

   const name_mine = "Priyanshu Mittal";
   const age = 21;
   console.log(`My name is ${name_mine} and I am ${age} years old.`);


// Q8 Predict and then verify:
// Create: "5" and number 3
// Try:

// addition
var str2 = "5";
var num = 3;
console.log(str2+num);

// subtraction
console.log(str2-num);

// multiplication
console.log(str2*num);

// division
console.log(str2/num);

// Observe outputs.


// Q9 Create string:

// "HELLOworLd"
// Check if it contains "world" in case-insensitive way.

var str4 = "HELLOworLd";
console.log(str4.toLowerCase().includes("world"));

// Q10  Given:

// let str = "JavaScript";
// Create a new string where:
// Java → Type
// Final output:

// TypeScript
   let str5 = "JavaScript";
   console.log(str5.replace("Java","Type"));

// Q11  Reverse the words without using reverse method.
// Given:
// let str = "I love javascript";

// Output:
// javascript love I

let str9 = "I love javascript";
let str10 = "";
for (let  i = str9.length-1;i>=0;i--){
   str10 += str9[i];
}
console.log(str10);


// Q12. Capitalize First Letter of Each Word
// Input:
// "hello world javascript"
// Output:
// Hello World Javascript

let str11= "hello world javascript"
let capitals = str11.split(" ");
for (let i =0;i<capitals.length;i++){
   capitals[i] = capitals[i][0].toUpperCase() + capitals[i].slice(1);
}

console.log(capitals.join(" "));

// Q13. Check pallindrome string 
// input = "madam"
// output = true

let str13 = "madam"
let str14 = str13.split().reverse().join("");
if (str13 == str14){
   console.log(true);
}
else {
   console.log(false);
}


// Q14. Find longest word in a substring 

// Input : - "I am learning javascript deeply"
// Output :- javascript 

let str15 = "I am learning javascript deeply";
let words = str15.split(" ");
let longest = "";
for (let word of words){
   if (word.length > longest.length){
      longest = word;
   }
}
console.log(longest);


// yeh khud nhi huya 
// split lagaya -> loop lgaya -> har word ki length compare ->  longest update kr diya 

// yeh interviewer  agr kehde ki split use nhi krna 
let longest1 = "";
let current = "";
for (let i =0;i<=str15.length;i++){
   if (str15[i] !== " " && i < str15.length) {
      current += str15[i];
   } else {
      if (current.length > longest1.length){
         longest1 = current;
      }
      current = ""
   }
}
console.log(longest1);



// Q 15 . Count Character Frquency
// Input: "programming" 
// Output: p:1 r:2 o:1 g:2 ... Return as object.

let str20 = "pRogramming"
let freq = {}
for  (let ch of str20){
   if (freq[ch]){
      freq[ch]++;
   } else {
      freq[ch] =1;
   }
}
console.log(freq);

// or (shorter version)


let freq1 = {};
for (let ch of str20) {
   freq1[ch] = (freq1[ch] || 0) + 1;
}
console.log(freq1);


// 😈 Bonus Challenge (Only if confident)

// Reverse a string using indexing (without using reverse method).
   let str6 = "Priyanshu";
   let str7 = "";
   for (let i =0;i<=str6.length-1;i++){
    str7= str7+str6[str6.length-1-i];
   }
   console.log(str7);
    // or
    var str8 = "";
    for (let i = str6.length-1;i>=0;i--){
        str8 = str8 + str6[i];
    }
    console.log(str8);
   
