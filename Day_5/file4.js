// Functions inside Functions 

const app = () =>{
    const myFunc = () => {
        console.log("hello from myFunc");
    }
    
    const addTwo = (num1,num2) => {
        return num1+num2;
    }

    const mulTwo = (num1,num2) => {
        return num1*num2;
    }
    console.log("inside app");
}

app(); // inside app
// we cannot access myFunc , addTwo or mulTwo from outside app function

// TO access them we need to return them
const app1 = () =>{
    const myFunc = () => {
        console.log("hello from myFunc");
    }
    
    const addTwo = (num1,num2) => {
        return num1+num2;
    }

    const mulTwo = (num1,num2) => {
        return num1*num2;
    }
    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mulTwo(2,3));
}
app1();
// inside app
// hello from myFunc
// 5
// 6