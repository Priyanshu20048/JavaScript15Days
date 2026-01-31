// special loops

// for...of loop :- gives values of array elements

const fruits = ["apple","mango","orange","kiwi"];
for (let fruit of fruits){
    console.log(fruit);
}
// it iterates over the values of an iterable object

// convention to use singular form of array name for variable in for...of loop
// fruit for fruits array

// ---------------------------------------------
// for...in loop :- gives index of array elements
for (let index in fruits ){
    console.log(index);
}
// it iterates over the indexes of an iterable object
// output :- 0 1 2 3
