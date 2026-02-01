   // ----------Day 1----------------
   let name1 = "JavaScript";
    name1[0] = "j";
    console.log(name1); // JavaScript  

    var a = 10;
    var a = 20;
    console.log(a); // 20

    let a = 10;
    let a = 20;
    console.log(a); // error -> already been declared 

    const x = 5;
    x = 10;
    console.log(x); // error -> Assignment to constant variable 

    let str = "hello";
    console.log(str.length); // 5

    let s = "   js   ";
    console.log(s.trim().length); // 2

    let a = 10;
    let b = 20;
    console.log("Sum is " + a+b); // Sum is 1020
    // one operand is string then concat 

    let a = 10;
    let b = 20;
    console.log(`Sum is ${a+b}`); // Sum is 30


// -------------Day 2 ------------------------------
    console.log(typeof null); // object 

    console.log(typeof NaN); // number 

    console.log("5" + 3); // 53

    console.log("5" - 3) // 2
    // - forces numeric conversion 

    console.log("5" == 5); // true

    console.log("5" === 5); // false 

    if (""){
        console.log("Yes");
    } else {
        console.log("No");
    }
   // No

   if ([]) {
    console.log("True");
   } else {
    console.log("False");
   }
   // True :- empty Arrays are truthy 

   let x =0;
   if(x) {
    console.log("A");
   } else {
    console.log("B");
   } 
   // B

   for (let i =0;i<0;i++){
    console.log(i);
   } // No output 

// =----------------Day 3 ------------------------------

let arr = [1,2,3];
arr[0] = 10;
console.log(arr);// [10,2,3]

let arr = [1,2,3]
console.log(arr.length); //3

let a = [1,2]
let b = a;
b.push(3);
console.log(a); // [1,2,3]

let a = [1,2]
let b = [...a]
b.push(3);
console.log(a); //[1,2]

let arr = [10,20,30]
console.log(arr.pop()); // 30

let arr = [1,2,3]
arr.unshift(0);
console.log(arr); // [0,1,2,3]

let arr = [1,2,3];
for (let i in arr){
    console.log(i);
} 
// 0 
// 1
// 2 

let arr = [1,2,3];
for (let i of arr){
    console.log(i);
}
// 1
// 2
// 3 

// ----------------------------Day-4---------------------------

