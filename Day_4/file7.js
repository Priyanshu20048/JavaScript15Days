// Nested Destructuring 
const users= [
    {
        name1: "Ram" ,
        email : "ram@example.com"
    },
    {
       name2 : "Shyam",
       email : "shyam123@gmail.com" 
    },
    {
        name3 : "Riya",
        email : "riya23@gmail.com"
    }]

const [user1,user2,user3] = users;
console.log(user1);

// destructuring inside destructuring
const [{email:em},,{name3}] = users;
console.log(em); // ram@example.com
console.log(name3); // Riya

// -------------------------

