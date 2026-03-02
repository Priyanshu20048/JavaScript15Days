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

// Very important
// for in loop :- already object ka ek snapshot le leta hai and usi ke upar iterate karta hai
// for of loop :- real time me object ke upar iterate karta hai

// for in loop me agar hum object me koi naya key add karte hai to wo usme reflect nahi hota
let obj = { a: 1, b: 2 };

for (let key in obj) {
  if (key === "a") delete obj[key];
  console.log(key);
}
// a
// b
// even after deleting 'a', 'b' is still printed because for in loop took a snapshot
// real objec mei changes hogye hai but for in loop ko pata nahi chala
// output will be a and b
console.log(obj); // { b: 2 }

// same kaam for of loop se karte hai
// ismei jo snapshot hai woh woh Object.key() hume jo keys ka array return karta hai uska hota hai

let obj1 = { a: 1, b: 2 };
for (let key of Object.keys(obj1)) {
    if (key === "a") delete obj1[key];
    console.log(key);
}
// a
// b
// output will be a and b
console.log(obj1); // { b: 2 }
// but ab agar hum dubara se Object.keys() call karte hai to hume updated keys milengi
console.log(Object.keys(obj1)); // [ 'b' ]
// ab hume sirf b hi milega kyuki a delete ho chuka hai

