// Object Methods 

// 1. Object.freeze() ->
// -> It freezes the object and makes it immutable
// -> We cannot add, delete or modify properties of a frozen object
let obj = {a:1};
Object.freeze(obj);
obj.a = 5; // it will not change the value as object is frozen
console.log(obj.a); // 1
obj.b = 2; // it will not add new property as object is frozen
console.log(obj.b); // undefined
delete obj.a; // it will not delete the property as object is frozen
console.log(obj.a); // 1

// 2. Object.seal() ->
// -> It seals the object and makes it non-extensible
// -> We cannot add or delete properties of a sealed object but we can modify existing properties
let obj2 = {x:10,y:20};
Object.seal(obj2);
obj2.x = 15; // it will change the value as object is sealed
console.log(obj2.x); // 15
obj2.z = 30; // it will not add new property as object is sealed
console.log(obj2.z); // undefined
delete obj2.y; // it will not delete the property as object is sealed
console.log(obj2.y); // 20

// 3. Object.assign() ->
// -> It is used to copy the values of all enumerable own properties from one or more source objects to a target object
let target = {a:1};
let source = {b:2,c:3};
Object.assign(target,source);
console.log(target); // {a:1,b:2,c:3}
// -> It can also be used to clone an object
let obj3 = {p:100,q:200};
let clone = Object.assign({},obj3);
console.log(clone); // {p:100,q:200}

// it is a shallow copy
// it needs to be noted that if the source object has nested objects, the nested objects are copied by reference
let obj4 = {m:1,n:{o:2}};
let clone2 = Object.assign({},obj4);
clone2.n.o = 5;
console.log(obj4.n.o); // 5
// obj4's nested object is affected as it is copied by reference

// if arguments are multiple, later objects overwrite properties of earlier objects

let target2 = {a:1,b:2};
let source1 = {b:3,c:4};
let source2 = {c:5,d:6};
Object.assign(target2,source1,source2);
console.log(target2); // {a:1,b:3,c:5,d:6}
// b and c are overwritten by source1 and source2 respectively

// if the target object is not empty, properties of source objects are added to it
let target3 = {a:1};
let source3 = {b:2};
Object.assign(target3,source3);
console.log(target3); // {a:1,b:2}
// a is retained and b is added
// if there are same properties in target and source, source properties overwrite target properties

// if arguments is 0  -> error 
// if arguments is 1  -> returns the same object (mothing copy)
// if arguments >1  -> copies properties from source to target

// 4. Object.create() ->
// -> It is used to create a new object with the specified prototype object and properties
let proto = {greet:function(){console.log("Hello!");}};
let obj5 = Object.create(proto);
obj5.greet(); // Hello!
console.log(Object.getPrototypeOf(obj5) === proto); // true
// -> It can also be used to create an object with null prototype
let obj6 = Object.create(null);
console.log(Object.getPrototypeOf(obj6)); // null
// -> Properties can be added to the created object
obj6.a = 10;
console.log(obj6.a); // 10
// -> Properties can also be defined while creating the object
let obj7 = Object.create({},{
    x : {
        value : 20,
        writable : true,
        enumerable : true,
        configurable : true
    },
    y : {
        value : 30
    }
});
console.log(obj7.x); // 20
console.log(obj7.y); // 30
obj7.x = 25;
console.log(obj7.x); // 25
// obj7.y = 35; // it will not change as writable is false by default
// console.log(obj7.y); // 30
// -> If the prototype is null, the created object will not inherit any properties or methods
let obj8 = Object.create(null);
console.log(obj8.toString); // undefined
// console.log(obj8.hasOwnProperty); // undefined

// 5. in operator ->
// -> It is used to check if a property exists in an object
let obj9 = {a:1,b:2};
console.log('a' in obj9); // true
console.log('c' in obj9); // false
// -> It checks both own properties and inherited properties
// if any property exists in the prototype chain, it returns true
console.log('toString' in obj9); // true
// -> It can also be used with arrays to check if an index exists
let arr = [10,20,30];
console.log(0 in arr); // true
console.log(3 in arr); // false
console.log('length' in arr); // true

//6. Object.hasOwnProperty() ->
// -> It is used to check if a property exists in an object as its own property
let obj10 = {x:100,y:200};
console.log(obj10.hasOwnProperty('x')); // true
console.log(obj10.hasOwnProperty('z')); // false
// -> It does not check inherited properties
console.log(obj10.hasOwnProperty('toString')); // false
