// ------------Switch Statement Example------------

let day =2;
if (day ===0){
    console.log("Sunday");

}
else if (day ===1){
    console.log("Monday");

}
else if (day === 2){
    console.log("Tuesday");{

    }
}
else if (day === 3){
    console.log("Wednesday");

}
else if (day === 4 ){
    console.log("Thursday");
}
else if (day === 5 ){
    console.log("Friday");

}
else if (day === 6){
    console.log("Saturday");
}
else {
    console.log("Invalid number");
}

// --- you can do this by using switch statemnt 
switch(day){
    case 0: 
    console.log("Sunday");
     case 1: 
     console.log("Monday");
     case 2: 
     console.log("Tuesday");
     case 3: 
     console.log("Wednesday");
     case 4:
        console.log("Thursday");
        case 5 :
            console.log("Friday");
            case 6:
                console.log("Saturday");
                default :
                console.log("Invalid Day");}

// here switch checks the value of day
// and matches it with each case value
// if match found it executes the code
// now all the other cases will also be executed
// if we want that wherever match found only that case should be executed
// we have to use break statement after each case
switch(day){
    case 0:
    console.log("Sunday");
    break;
    case 1:
    console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
// now only the matched case will be executed
// break statement is used to exit from the switch statement
