// loops in an Array 

// for loop 

let fruits = ["apple", "banana", "grapes", "mango"];
let upp =[];
for (let i =0;i<fruits.length;i++){
    upp.push(fruits[i].toUpperCase());
}

console.log(upp);

// invalid index pr undefined aayega 

// while loop 
let i = 0;
while (i <fruits.length){
    console.log(fruits[i]);
    i++;
}


