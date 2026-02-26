about = function(...hobbies){
   console.log("My name is " + this.name + " and I am " + this.age + " years old. and my hobbies are " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2]);
}
hobbies = ["reading", "coding", "travelling"];
const person = {
  name : "Prince",
  age :21,
}


const person2 = {
    name : "Priyanhsu",
    age :22,}

    person.about = about;
    const ap = about.bind(person,...hobbies);
      ap();