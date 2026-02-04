// Spread Operator in Objects
// Spready on;y copy the top level and nested ones are just copied by reference
// shallow copy

const obj1 = {
    key1 : "value1",
    key2 : "value2", 
};
console.log(obj1); // { key1: 'value1', key2: 'value2' }

// keys are unique in objects
// if we try to add same key again then it will overwrite the previous value
const obj2 = {
    key1 : "value1of2",
    key2 : "value2of2",
    key1 : "value3",
};

console.log(obj2); // { key1: 'value3', key2: 'value2of2' }
// key1 is overwritten

// how to clone an object
const obj3 = {...obj1};
console.log(obj3); // { key1: 'value1', key2: 'value2' }

const obj4 = {...obj1,...obj2};
console.log(obj4); // { key1: 'value3', key2: 'value2of2' }
// obj2 keys overwrite obj1 keys
// order matters in spread operator

const obj5 = {...obj2,...obj1};
console.log(obj5); // { key1: 'value1', key2: 'value2' }
// obj1 keys overwrite obj2 keys

// we can also add new key value pairs while cloning
const obj6 = {...obj1, key3 : "value3", key4 : "value4"}

console.log(obj6); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

const newObject = {..."abc"};

console.log(newObject); // { '0': 'a', '1': 'b', '2': 'c' }
// it spreads the string into key value pairs where key is index and value is character at that index


//-----------------------------------------------------


const newObject1 = {...["item1","item2","item3"]};

console.log(newObject1); // { '0': 'item1', '1': 'item2', '2': 'item3' }
// it spreads the array into key value pairs where key is index and value is element at that index


