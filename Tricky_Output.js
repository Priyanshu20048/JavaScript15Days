   // ----------Day 1----------------
   let name1 = "JavaScript";
    name1[0] = "j";
    console.log(name1); // JavaScript  

    var a = 10;
    var a = 20;
    console.log(a); // 20

    let a = 10;
    let a = 20;
    console.log(a); // error -> already been declared 

    const x = 5;
    x = 10;
    console.log(x); // error -> Assignment to constant variable 

    let str = "hello";
    console.log(str.length); // 5

    let s = "   js   ";
    console.log(s.trim().length); // 2

    let a = 10;
    let b = 20;
    console.log("Sum is " + a+b); // Sum is 1020
    // one operand is string then concat 

    let a = 10;
    let b = 20;
    console.log(`Sum is ${a+b}`); // Sum is 30


// -------------Day 2 ------------------------------
    console.log(typeof null); // object 

    console.log(typeof NaN); // number 

    console.log("5" + 3); // 53

    console.log("5" - 3) // 2
    // - forces numeric conversion 

    console.log("5" == 5); // true

    console.log("5" === 5); // false 

    if (""){
        console.log("Yes");
    } else {
        console.log("No");
    }
   // No

   if ([]) {
    console.log("True");
   } else {
    console.log("False");
   }
   // True :- empty Arrays are truthy 

   let x =0;
   if(x) {
    console.log("A");
   } else {
    console.log("B");
   } 
   // B

   for (let i =0;i<0;i++){
    console.log(i);
   } // No output 

// =----------------Day 3 ------------------------------


