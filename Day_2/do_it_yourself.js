// Q1 — Truthy/Falsy filter 
// Function banao:
// Input:- [0, 1, "", "hello", null, undefined, [], {}, NaN]
// Output:Sirf truthy values return karo.
 
let values = [0, 1, "", "hello", null, undefined, [], {}, NaN]
for (let i =0;i<values.length;i++){
    if (values[i]){
        console.log(values[i]);
    }
}

// Q2 Type conversion without Number()
// String:"123"

let str1= "123";
str1 = +str1;
console.log(str1);

// Q3. Loop logic 
// Without using .length, count characters: "javascript"
str2 = "javascript";
count =0;
for (let ch of str2){
     count++;
}
console.log(count);

// Q4. Create function:
// Input:
// "Admin"
// "user"
// "guest"
// Output:
// Full access
// Limited access
// Read only
// case insensitive 

let role = "AdMin";
switch(role.toLowerCase()){
    case "admin" : 
                 console.log("Full Access");
                 break;
    case "user" :
                 console.log("Limited Access");
                 break;
    case "guest" :
                console.log("Read Only");
}

// Q5. Reverse Loop Challenge 
// print :- 1 2 3 4 5 
let i =5;
while(i>0){
    console.log(i);
    i--;
} 

// Q10 — Advanced truthy logic 
// Input:[false, "0", 0, "hello", NaN, null]
// Output:Count kitni truthy values hain.

let values1= [false, "0", 0, "hello", NaN, null];
let count1 = 0;
for(let i =0;i<values1.length;i++){
    if (values1[i]){
        count1++;
    }
}
console.log(count1);

// Q11. Custom Truthy / Falsy checker 
// Input:["",0,"hello",null,[],{}]
// Output:
// false
// false
// true
// false
// true
// true

let check = ["",0,"hello",null,[],{}];
for (let ch of check){
    if(ch){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// Q12. Type converter utility 
// Input:convert("15")
// Output:
// number:15
// string:"15"
// boolean:true

let str5 = "15";
console.log("number : ",+str5);
console.log("string: ",str5);
console.log("boolean: ",Boolean(str5));

// Q13. FizzBuzz 
// Print:
// multiple of 3 → fizz
// multiple of 5 → buzz
// multiple of both → fizzbuzz
// Constraints:No if statement allowed.
for (let i = 1; i <= 15; i++) {
   let result =
      (i % 3 === 0 ? "fizz" : "") +
      (i % 5 === 0 ? "buzz" : "");

   console.log(result || i);
}
