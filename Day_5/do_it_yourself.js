// Q1. Implement Counter Using Function

// Ek function createCounter()
// Jo ek aur function return kare.

// Jab us returned function ko baar-baar call karo
// Toh number increment hota rahe.

// 🧠 Example
// const counter = createCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3

function createCounter() 
{
    let count=0;
     return function() {
       count++ ;
       console.log(count);
    }; 
    
}
const counter = createCounter();
counter();
counter();
counter();


// Q2.  Implement Once Function

// Ek function once() banana hai.

// Ye kisi function ko input lega
// Aur return karega ek naya function.

// Wo naya function sirf ek hi baar run hona chahiye.

function once(fn){
    let called = false ;
    return function(){
        if(!called){
            called = true;
            fn();
        }
        else {
            console.log("nothing");
        }
    };
}
const fn = once(() => {
  console.log("Run once");
});

fn(); // Run once
fn(); // nothing
fn(); // nothing

// Q3. Custom Map Function 
// Ek function banana hai:
// myMap(arr, callback)
// Ye bilkul array.map() ki tarah kaam kare.

// myMap([1,2,3], x => x * 2);
// Expected Output:
// [2,4,6]

let arr = [1,2,3]
let result = [];
function humaraMap(arr,result){
    for (let val of arr){
        val = val*2;
        result.push(val);

    }
    
}

humaraMap(arr,result);
console.log(result);

// or actual mei neeche waala sahi hai 
function myMap(arr2, callback) {
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    let newValue = callback(arr2[i], i, arr2);
    result.push(newValue);
  }

  return result;
}
let arr2 = [1,2,3];

let output = myMap(arr, x => x * 2);

console.log(output);


// Q4. Function Currying
// Normal function:

// add(2,3)  // 5

// Isko convert karo:

// add(2)(3)  // 5

function sum(a) {
    return  function sum2(b) {
        console.log(a+b);
    }
}
sum(2)(3)

// Q5. Find Factorial Using Recursion
// Input: 5
// Output:120

function fact(n){
    if (n <=1){
        return 1 ;}
     return n = n * fact(n-1);}
    
    

console.log(fact(5));