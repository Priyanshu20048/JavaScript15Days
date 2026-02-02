// Objects Inside Arrays

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
    }
]
console.log(users);

// -------------------------
for (let user  of users){
console.log(user.email);
}
