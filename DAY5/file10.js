// callback functions 

// A callback function is a function passed into another function as an argument,

function myFun2(){
    console.log("hello from func2");
}

function myFun(callback) { 
    console.log("helo world ");
    callback();
}

myFun(myFun2);

// here myFun2 is passed as an argument to myFun and called inside myFun
// here myFun2 is a callback function




