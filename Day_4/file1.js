// Objects 
// Arrays are good but not sufficient for real world data 
// objects store key value pairs 
// objects dont have index 

// how to create objects

const person = {names : "Priyanshu",
    age :21,
    hobby : "coding"
};
// here names and age are key  or also called as properties
// keys are by deafault strings
// Priyanshu , 21 -> value

console.log(person);// { names: 'Priyanshu', age: 21 }

console.log(typeof person); // object

// ------------------------------
// how to access data from objects

// 1. using dot notation
console.log(person.names); // Priyanshu
console.log(person.age); // 21

// 2. using bracket notation
console.log(person["names"]); // Priyanshu

// you can also store arrays or objects inside objects

//--------------------------------------------
// difeerence between dot notation and bracket notation

// if they key has space in between then we cannot use dot notation
const personA = {
    "first name " : "Ayan",
    "last name " : "Kapoor"
}
console.log(personA["first name "]); // Ayan
// console.log(personA.first name ); // error

// dot notation -> when you know the exact key name
// bracket notation -> when key is dynamic or stored in a variable
console.log("difference");
const key = "age" ;
personA.key = 22; // wrong
personA["key"]= 22; // wrong

personA[key] = 22; // correct
console.log(personA);
// { 'first name ': 'Ayan', 'last name ': 'Kapoor', age: 22 }
//--------------------------------------------

// Arrays inside objects

const person1 = {
    names : " Priyanshu Mittal ",
    age :21,
    hobbies :["singing","coding","dancing"]
    };
    console.log(person1.hobbies); // [ 'singing', 'coding', 'dancing' ]

    console.log(person1.hobbies[1]); // coding

    // how to add key value pair to objects

    person.gender = "female";
    console.log(person);
    // { names: 'Priyanshu', age: 21, hobby: 'coding', gender: 'female' }

    person['height']= 5.3;
    console.log(person);

