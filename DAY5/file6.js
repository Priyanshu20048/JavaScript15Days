// block scope vs function scope 

// var is function scoped
// let and const are block scoped

// Block scope

{
    let firstName = "Bharti";
    console.log(firstName); // Bharti
}
console.log(firstName); // gives error because firstName is block scoped

{
    let firstName = "Bharti Mittal";
    console.log(firstName); // Bharti Mittal
}

// here both the firstName are different because they are in different block scope
// so we can have same variable name in different block scope
// same for const 

const firstName = "Priyanshu"; // global scope
console.log(firstName); // Priyanshu 

// var  -> function scope 
{
    var lastName = "Mittal";
}

console.log(lastName); // Mittal
// here lastName is accessible outside the block because var is function scoped

{
    console.log(lastName); // Mittal
}

// here also lastName is accessible in another block because var is function scoped 



