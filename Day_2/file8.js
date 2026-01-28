//-----------while loop example-----------//
// print 0 to 9
let i =0;
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

// very lengthy code for printing 0 to 9

// use loops to reduce the code length

// ---------while loop---
// while loop runs until the condition is true
// syntax
// while(condition){
//    // code to be executed
// }


// print 0 to 9 using while loop
while (i<10){
console.log(i);
i++;}
// output: 0 1 2 3 4 5 6 7 8 9

// current value of i
console.log("current value of i:", i); // 10
// loop stops when i becomes 10 because condition i<10 becomes false

//  sum of first n natural no.s 
let n =5
let j =0;
let sum = 0;
while (j <=n){
  sum = sum+j;
  j++;
} 
console.log(sum);

// shortcut to find sum of n natural nos 
// n*(n+1)/2
console.log(5*(5+1)/2);
// this is faster then while loop 



