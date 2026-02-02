// Iterate objects 

const person = {
    names: "Priya",
    age: 24,
    "person hobbies": ["reading","traveling","swimming"]
}

// for in loop
for(let key in person){
    console.log(key, );
}
// only keys will be printed

for (let key in person){
    console.log(person[key]);
}
// only values will be printed

for (let key in person){
    console.log(key, person[key]);
}
// both key and values will be printed
// names Priya
// age 24
// person hobbies [ 'reading', 'traveling', 'swimming' ]

// --------------------------------------------
// Object.keys() -> returns an array of keys

console.log(Object.keys(person));
// [ 'names', 'age', 'person hobbies' ]

// Object.values() -> returns an array of values
console.log(Object.values(person));
// [ 'Priya', 24, [ 'reading', 'traveling', 'swimming' ] ]

// for of loop cannot be used directly on objects
for (let key of person){
    console.log(key);
}
// TypeError: person is not iterable
 
// but we can use for of loop on Object.keys() or Object.values()
for (let key of Object.keys(person)){
    console.log(key);
}