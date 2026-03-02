// lexical scope 
const myVar = "gobally ";
function myApp(){
    // const myVar = "value1";

    function myFunc(){
        // const myVar = "value21000";
        const myFuncInner = () => {
        console.log("hello from myFunc", myVar);
    }
    myFuncInner();}

    const myFunc2 = function (){}
    const myFunc3 = () => {}

    console.log(myVar);
    myFunc();
}

myApp(); 

// in lexical scope a function can access the variable of its parent function
// in javascript if it needs to search for a variable it first looks in its own scope
// if it does not find it there it looks in the parent function scope
// if it does not find it there it looks in the global scope
// this is called lexical scope
// here myFunc is able to access the variable myVar of its parent function myApp
// but myApp cannot access the variable of myFunc
// lexical scope is also called static scope
// because the position of the function in the code defines its scope
// a function always has access to the variable of its parent function
// even if the function is called outside the parent function


// Note :- child can access parent scope but parent cannot access child scope