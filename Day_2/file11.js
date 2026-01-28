//----------------do while loop ---------------
// do while loop is similar to while loop
// but do while loop executes the code block at least once before checking the condition
let i =0;
do {
    console.log(i);
    i++;
} while (i<10);
// output: 0 1 2 3 4 5 6 7 8 9

// now if the condition is false initially
// still do while loop will execute the code block once
i=0;
do {
    console.log(i);
    i++;
} while (i<0);
// output: 0
// here condition i<0 is false initially
// but still code block is executed once before checking the condition
// so do while loop is used when we want to execute the code block at least once
// even if the condition is false
