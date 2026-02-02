// computed properties

const key1 = "ob1";
const key2 = "ob2";

const value1 = "m1";
const value2 = "m2";

// you have to make an object using these variables like this 
 //  const obj = {
//    ob1 : "m1",
//    ob2 : "m2",}

const obj = {
   [key1] : value1,
   [key2] : value2, 

}

console.log(obj); // { ob1: 'm1', ob2: 'm2' }

// this is called computed properties because the keys are computed from the variables key1 and key2
