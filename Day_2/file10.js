// break statement :- used to exit from a loop or switch statement
for (let i =1;i<=10;i++){
    if (i==5){
        break;
    }
    console.log(i);
}
console.log("Loop ended");

// output: 1 2 3 4
// when i becomes 5 break statement is executed


// continue :- used to skip the current iteration of the loop and move to the next iteration
for (let j =1;j<=10;j++){
    if (j==5){
        continue;
    }
    console.log(j);
}
// output: 1 2 3 4 6 7 8 9 10
// when i becomes 5 continue statement is executed
// so 5 is skipped and loop moves to next iteration

