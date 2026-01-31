//------------primitive vs reference data types-----------//
// primitive data types :- number, string, boolean, null, undefined, symbol, bigint
// reference data types :- objects, arrays, functions

// primitive data types -> stack memory -> sequential memory
// reference data types -> heap memory -> random memory
 // stack memory is faster than heap memory
let num1 = 6;
let num2 = num1; // copy by value
console.log("num1:", num1); // 6
console.log("num2:", num2); // 6
num1++;
console.log("after incrementing num1");
console.log("num1:", num1); // 7
console.log("num2:", num2); // 6
// num2 is not affected because num2 has its own copy of value
// num1 and num2 are independent
// num1 and num2 have different memory locations


// reference data types

let arr1 = ["item1", "item2"];
// arr1 is stored in heap memory 
//  its reference is stored in stack memory
let arr2 = arr1; // copy by reference
// arr 2 gets the different memory location in stack memory but points to the same location in heap memory
// arr2 gets the reference of arr1
console.log("arr1:", arr1); // [ 'item1', 'item2' ]
console.log("arr2:", arr2); // [ 'item1', 'item2' ]
arr1.push("item3");
console.log("after pushing item3 to arr1");
console.log("arr1:", arr1); // [ 'item1', 'item2', 'item3' ]
console.log("arr2:", arr2); // [ 'item1', 'item2', 'item3' ]
// arr2 is also affected because arr2 references the same array as arr1
// arr1 and arr2 are dependent
// arr1 and arr2 have same memory location




