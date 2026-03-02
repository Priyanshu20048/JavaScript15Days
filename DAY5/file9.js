// Parameter Destructuring 

// object 

const person ={
    firstname : "Harshit",
    age : 22,
}

function getDetails(obj) {
    console.log(obj.firstname);
    console.log(obj.age);
}

getDetails(person);


// using Destructuring 
function getDetails1({firstname,age}) {
    console.log(firstname);
    console.log(age);
}

printDetails(person);

