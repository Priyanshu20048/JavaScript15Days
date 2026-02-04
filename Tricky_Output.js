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

let obj = {name :"JS"},
    obj.age = 20;
    console.log(obj); // {name:"JS", age:20}

let obj = {name : "JS"};
delete obj.name;
console.log(obj): // {}

let obj = {name : "JS"};
console.log(obj["name"]); // JS

let key = "age";
let obj = {name : "JS",age : 25};
console.log(obj.key); // undefined

let key = "age";
let obj = {name : "JS" , age : 25};
console.log(obj[key]); // 25

let obj = {a:1,b:2};
for (let key in obj){
    console.log(key);
} 
// a 
// b

let obj = {a:1,b:2};
for (let key in obj){
    console.log(obj[key])
} 
// 1
// 2 

let obj = {
    user : {
        name :"js",
        age : 20
    }
};
console.log(obj.user.name); // js

const obj = {a:1};
obj.a = 2;
console.log(obj); // {a:2}

const obj = {a:1};
obj = {a:2}; // Error 

let obj1 = {a:1}
let obj2 = obj1;
obj.a = 5;
console.log(obj1.a); // 5

let obj = {a:1};
function update(o){
    o.a = 10;
}
update(obj);
console.log(obj.a); // 10

let obj = {a:1};
Object.freeze(obj);
obj.a = 100;
console.log(obj.a); // 1 
// Object.freeze() prevents modification.

let obj = {a:1};
console.log("a" in obj);
console.log(obj.hasOwnProperty("a"));
// true 
// true 

let obj = Object.create({a:1});
console.log(obj.a);
console.log(obj.hasOwnProperty("a"));
// 1
// false 

let obj = {a:1,b:2};
for (let key in obj){
    if (key ==="a") delete obj[key];
    console.log(key);
}
// a
// b 

let obj = {a:1};
Object.seal(obj);
obj.b = 2;
delete obj.a;
console.log(obj); // {a:1}

let obj = {a:{b:2}};
let copy = {...obj};
copy.a.b = 10;
console.log(obj.a.b); // 10 






