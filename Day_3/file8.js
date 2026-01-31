// Array destructuring

const myarr = ["value1","value2","value3"];
// we want to extract these values and store them in variables
let var1= myarr[0];
let var2 = myarr[1];
console.log(var1); // value1
console.log(var2); // value2

// very lengthy process

// shortcut using array destructuring
// destructuring syntax
let [v1,v2] = myarr;
console.log(v1); // value1
console.log(v2); // value2

// original array remains unchanged
// order matters in array destructuring

// if you have more variables than array elements
let [a,b,c,d] = myarr;
console.log(a); // value1
console.log(b); // value2
console.log(c); // value3
console.log(d); // undefined

// if you have less variables than array elements
let [x,y] = myarr;
console.log(x); // value1
console.log(y); // value2
// third element is ignored

// Skipping elements during destructuring -> just add extra comma
let [first,,third] = myarr;
console.log(first); // value1
console.log(third); // value3
// second element is skipped

let [v11,...mynew] = myarr;
console.log(v11); // value1
console.log(mynew); // [ 'value2', 'value3' ]


