// Q1. Deep Clone Object (Nested)
// Input:
// let obj = {a:1, b:{c:2}};

// Output:
// New fully independent object.

// Constraint:
// Spread operator not enough.
// Nested copy must not share reference.

let obj = {a:1,b:{c:2}};
let obj1 = structuredClone(obj);
obj1.b.c = 5;
console.log(obj1);
console.log(obj);

// Q2.Count Keys in Nested Object
// Input:
// {
//  a:1,
//  b:{c:2,d:{e:3}}
// }
// Output:Total keys count = 5

let obj2 = {a:1,b:{c:2,d:{e:3}}};
function countkeys(obj) {
    let count =0;
    for (let key in obj){
        count++;
        if (typeof obj[key] == "object" && obj[key] !==null){
            count+= countkeys(obj[key]);
        }
    }
    return count;
}
console.log("Total keys : ",countkeys(obj2));

// Q3. Flatten Nested Object
// Input:
// {
//  a:1,
//  b:{c:2}
// }

// Output:
// {
//  a:1,
//  "b.c":2
// }

let obj3 = {a:1,b:{c:2}};
function flattenObject(obj,parentKey = "",result={}){
    for (let key in obj ){
        let newKey = parentKey ? parentKey + "." + key : key;
        if(typeof obj[key] ==="object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key],newKey,result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
console.log(flattenObject(obj));


// Q4. Find Object with Maximum Property

// Input:
// [
//  {name:"A",score:50},
//  {name:"B",score:80},
//  {name:"C",score:60}
// ]

// Output:
// {name:"B",score:80}

let arr = [{name:"A",score :50},
    {name :"B",score :80},
    {name :"C", score:60}]
    let max = arr[0]
    for (let i =1;i<arr.length;i++){
            if (arr[i].score > max.score){
                max =  arr[i];
            }
    }
    console.log(max);
    
// Q5. Group By Property

// Input:
// [
//  {name:"A",city:"Delhi"},
//  {name:"B",city:"Mumbai"},
//  {name:"C",city:"Delhi"}
// ]

// Output:
// {
//  Delhi:[{...},{...}],
//  Mumbai:[{...}]
// }

let arr1 = [
    {name : "A" , city: "Delhi"},
    {name : "B" , city: "Mumbai"},
    {name : "C" , city: "Delhi"},
];

let result = {};
for (let obj of arr1){
    let key = obj.city;
if (!result[key]){
    result[key] = [];
}
result[key].push(obj);
}
console.log(result);

// or 
let result1 = {};

for (let i = 0; i < arr1.length; i++) {

  let cityName = arr1[i].city;   // city nikali

  if (result1[cityName] === undefined) {
    result1[cityName] = [];      // agar group nahi bana hai toh bana do
  }

  result1[cityName].push(arr1[i]);  // object group me daal do
}

console.log(result1);