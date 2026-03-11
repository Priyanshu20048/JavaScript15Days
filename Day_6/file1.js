// default parameter 

// Default parameters allow you to set default values for function parameters in case no value or undefined is passed.

function addTwo(a,b) {
    return a +b;
}
const ans = addTwo(4,5);
console.log(ans); // 9

// if we do not pass any value to b it will be undefined
const ans2 = addTwo(4);
console.log(ans2); // NaN
// because 4 + undefined = NaN


function add2(a ,b) {
    if (typeof b === "undefined"){
         b =0;
    }
    return a +b;
}
const ans3 = add2(4);
console.log(ans3); // 4

//----------------------------------------------------------

// Short method to set default parameter

function add3(a,b =0){
    return a +b;

}
const ans4 = add3(4);
console.log(ans4); // 4
const ans5 = add3(4,5);
console.log(ans5); // 9
