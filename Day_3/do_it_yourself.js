// Q1. Deep Clone Function
// Input:[1,2,[3,4]]
// Output:
// New completely independent array.
// Constraint:
// Spread not enough
// Nested array handle karo

let arr1 = [1,2,[3,4]]
let arr2 = structuredClone(arr1);
// or 
let arr3 = JSON.parse(JSON.stringify(arr1));
console.log(arr2);
console.log(arr3);


// Q2. Remove Duplicates without Set 
// Input:[1,2,2,3,4,4,5]
// Output:[1,2,3,4,5]
// Constraint:Set use mat karo  (khud se nhi huya yeh)

 let arr4 = [1,2,2,3,4,4,5];
 let result = [];
 for (let val of arr4){
    if (!result.includes(val)) {
        result.push(val);
    }
 }
console.log(result);

// Q3. Flatten Array (1 Level)
// Input:[1,2,[3,4],5]
// Output:[1,2,3,4,5]
// Constraint:flat() use mat karo

let arr6 = [1,2,[3,4],5]
let result1 = [];
for (let item of arr6){
    result1 = result1.concat(item);}
console.log(result1);

// or 

let result2 = []
for (let items of arr6){
    if (Array.isArray(items)){
        for (let inner of items){
            result2.push(inner);
        }
    }else {
        result2.push(items);
    }
}
console.log(result);

// Q4.Find Second Largest Element
// Input:[10,5,20,8]
// Output:10
// Constraint:sort() use mat karo

let arr8 = [10,5,20,8];
let Largest = -Infinity;
let  current = -Infinity;
for (let i =0;i<arr8.length;i++){
      if (arr8[i]  > Largest){
        current = Largest;
        Largest = arr8[i];
      }
      else if (arr8[i] < Largest ){
        if (arr8[i] > current){
            current = arr8[i];
        }
      }
}
console.log(current);

// Q5. Rotate Array Right by 1 
// Input:[1,2,3,4]
// Output:[4,1,2,3]
// Constraint:extra array use mat karo

let arr9 = [1,2,3,4]
let last = arr9.pop();
arr9.unshift(last);
console.log(arr9);