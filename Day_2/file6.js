// ----AND OR OPERATOR ----------------

let firstName = "Priyanshu";
let age = "22";
// to chck multiple conditions at the same time we use and or operator
// ------AND----
// Both must be true -> true 
if (firstName[0] ==="P" && age >18){
    console.log("yes");
}
else {
    console.log("no");

}
 // in and opertaor the conditions becomes true onli if both the statemnts written in the left and right of the && operator must be true ;
 // if any one conditions is false the whole statment automatically becomes false and else will be executed

 //------------------OR -------------
// only one condition must be true -> true
// if both are false -> false
if (firstName[0] === "p" || age >18) {
    console.log("atlaest one ");

}
else {
    console.log("both statemnts are false");}