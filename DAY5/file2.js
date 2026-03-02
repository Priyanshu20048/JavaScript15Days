// arrow functions 
// Arrow functions provide a concise syntax for writing functions in JavaScript.

// They are often used for short functions and callbacks.

// simply removing the function keyword and adding the => symbol after the parameter list.

const singHappyBirthday = () => {
    console.log("Happy Birthday to you ....");
}


const sum3 = (num1,num2,num3) => {
    return num1+num2+num3;
}

// more concise method
// if parameter is 1 -> no need of paranthesis

const isEven = num1 => {
    return num1%2 === 0;
}

// more concise method
// if the function body has only one statement we can remove the curly braces and the return keyword

const isEven2 = num1 => num1%2===0;

// if there are no parameters -> empty paranthesis
