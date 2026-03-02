// rest parameters 

function myFunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
} 
myFunc(1,2,3);
// a is 1
// b is 2
// c is 3

// if we pass more than 3 arguments only first 3 will be considered rest will be ignored
myFunc2(1,2,3,4,5,6);

// but if i wnat that c should take all the remaining arguments as an array 

function myFunc2(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
} 

// add all 
function addAll(...num1){
    let total =0;
    for (let num of num1){
        total += num;
    }
    return total;
}
console.log(addAll(1,2,3,4));


