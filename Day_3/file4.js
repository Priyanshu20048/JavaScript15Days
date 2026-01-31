// how to clone array -> arr1  and arr2 making independent


// 1. slice method

let arr1= ["item1", "item2","item3"];
let array2 = arr1.slice(0);
arr1.push("item3");
console.log(arr1);
console.log(array2);

// 2. concat method 
let arr4 = [].concat(arr1);
arr1.push("item4");
console.log(arr1);
console.log(arr4);


// 3. spread Operaator 
// // to create a copy of reference data type
let arr3 = [...arr1]; // spread operator to create a shallow copy
arr1.push("item5");
console.log("after pushing item5 to arr1");
console.log("arr1:", arr1); // [ 'item1', 'item2', 'item3', 'item4' ,item5]
console.log("arr3:", arr3); // [ 'item1', 'item2', 'item3' ]

// Spread opertaor :- failao 
// it spreads the elements of array
const arr5 = [..."abcde"];
console.log(arr5); // [ 'a', 'b', 'c', 'd', 'e' ]


// fastest way :- slice 

//-----------------------------------------------------

// create an array with array 2 elemts + extra elements 

// 1. slice + concat method 
let arr6 = arr1.slice(0).concat(["item8","item9"]);
console.log(arr6);

//2. concat method
let arr7 = [].concat(arr1,["item9"]);
console.log(arr7);

// 3. spread Operator 
let arr10 = [... arr1,"Priyanshu","Mittal"];
console.log(arr10);

let arr11 = [...arr1,...arr10];
console.log(arr11);
// it joins two array 





