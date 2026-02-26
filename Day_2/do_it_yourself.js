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