//-------for loop---
// print 0 to 9 using for loop
for (let i =0;i<10;i++){
    console.log(i);
}
// output: 0 1 2 3 4 5 6 7 8 9

console.log("current value of i:", i); // error i is not defined
// because i is [block scoped] to for loop only


// but if you create i with var 
for (var i =0;i<10;i++){
    console.log(i);
}
// output: 0 1 2 3 4 5 6 7 8 9
console.log("current value of i:", i); // 10

// because var is [function scoped]
 // or you can first define i outside the loop using let 
let i;
for (i =0;i<10;i++){
    console.log(i);
}
// output: 0 1 2 3 4 5 6 7 8 9
console.log("current value of i:", i); // 10


