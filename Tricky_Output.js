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

    let a = "10";
    let b = 5;
    console.log(a+b); //105

    let a = "10";
    let b = 5;
    console.log(a-b); // 5

    let str = "hello"
    str[0] = "H"
    console.log(str); // hello

    console.log("Javascript".substring(4,0)); // Java
    
    console.log("JavaScript".includes("script")); // false 

    let x = "5";
    console.log(typeof (x+1)); // String

    console.log("5"*2); // 10

    console.log("hello".substring(-2));
    // hello

    console.log("hello".slice(-2));
    // lo

    let name = "JS";
    name = name + "World";
    console.log(name);// JS World

    console.log("5" +2 *3); // 6
    console.log("5" + 2 + 3); // 523

    console.log(typeof typeof 10); // string 

    console.log(true+true); // 2
    
    console.log(null+1); // 1
    // ismei type conversion hua null ko -> 0 me 
console.log(undefined+1); // NaN    
  console.log(10/0); // Infinity 
  console.log(-10/0); // -Infinity
   console.log(Boolean("")); // false



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

   console.log([] == false); // true // because loose equality triggers type coercion . Empty array -> empty string -> number 0 

   console.log([] ==![]); // true

   console.log(null == undefined); // true 

   console.log(null === undefined); // false

   if([]){
    console.log("YES");

   } else {
    console.log("No");
   }           
    // YES

console.log("0" == false);  // true

console.log(false == "0"); // true;

console.log(NaN == NaN); // false NaN is not equal to any value, including itself, by definition.

console.log(true+true+"5"); // 25

console.log(5+"5" -2 *true); //53

for (var i=0;i<3;i++){
   console.log(i);
}
// 0
// 1
// 2

for (let i =0;i<3;i++){}
console.log(i); 
// 3

let i =0;
do {
    console.log(i);
}while(i);
// 0

if("false"){
    console.log("TRUE");
}
// TRUE  Non-empty strings are truthy regardless of their textual meaning.

if(0) {
    console.log("YES");
}else{
    console.log("NO");
} 
// NO

console.log([] +[]); 
// ""
// + -> string conversion
// [].toString() -> ""
// "" + "" -> ""

console.log([] +{});
// [object Object]
// [] -> ""
// {} -> "[object Object]"

console.log({} + []);
// 0
//Note :- JavaScript kabhi {} ko object nahi maanta.
//         Jab {} expression ke start me hota hai 
//              {} ->ignore
// iske baad hmare pass bcha +[] -> yeh unary operator hai 
// unary plus -> convert it to number 


console.log([] ==0);
// true 
// [] -> "" -> 0

console.log([] == "");
//true

if([] == false){
    console.log("YES");
}
// YES


console.log(true+"5"-1)
// NaN

console.log("2">"12"); // true 
// jb dono operands string ho toh lexicographical comparison krte hai (alphabet order comparison)
// first character compare "2" > "1" ascii code 2 ka jyada hai isliye true 

console.log("2" > 12); // false (numeric conversion)


console.log(Boolean("0")); // true

if(" ") console.log("yes"); // yes
// space string -> not empty 

switch(10){
 case "10":
   console.log("match");
} // strict compare -> no output 

console.log(typeof typeof 10); // string
// typeof 10 -> "number"
// type of "number" -> string 

console.log([] ==![]); // true 
// ismei sbse pehle not operator chlega woh empty array ki truthy value ko false krega 
// fir first array ko khaali string mei convert kiya jayega 
// empy string == false  -> true aayega 


let b=10;
let b=20; // SyntaxError: Identifier 'b' has already been declared

const c=10;
c=20;  // TypeError: Assignment to constant variable.

console.log(typeof function(){}); // function 
// // internally functions are treated as objects but typeof operator returns "function" for them




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






