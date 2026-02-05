// String Indexing 

let firstNme = "Priyanshu  ";


// P  r  i  y  a  n  s  h  u
// 0  1  2  3  4  5  6  7  8
// -9 -8 -7 -6 -5 -4 -3 -2 -1

// negative indexing :- end se start krte hai -1 se
// positive indexing :- start se start krte hai 0 se

console.log (firstNme[0]); // P
console.log (firstNme[3]); // y


// length of string
// use .length property to find length of string
// stringName.length
// spaces are also counted in length

console.log (firstNme.length); // 11

lastIndex = firstNme.length - 1; // 10

// printing the last character of string withut knowing length
console.log (firstNme[firstNme.length - 1]); // u

// Strings are immutable

// --------------Methods in String-------

//1. trim() method :- remove spaces from both ends of string
let city = "   New York   ";
console.log (city.length); // 15
city.trim();
console.log (city.length); // 15

// as strings are immutable so trim() method does not change the original string
// to store the trimmed string we have to assign it to a new variable 

let trimmedCity = city.trim();
console.log (trimmedCity); // "New York"
console.log (trimmedCity.length); // 8
// or we can re-assign it to the same variable
 city = city.trim(); // now city variable will have trimmed value


 // 2. toUpperCase()  method :- converts string to uppercase
    let country = "india";
    let upperCountry = country.toUpperCase();
    console.log (upperCountry); // INDIA
    console.log (country); // india
    // original string remains unchanged


// 3. toLowerCase() method :- converts string to lowercase
    let state = "CaliFORNIA";
    let lowerState = state.toLowerCase();
    console.log (lowerState); // california
    console.log (state); // CaliFORNIA


  //  4. slice() method :- extracts a part of string and returns it as a new string
    // stringName.slice(startIndex, endIndex)
    let fruit = "Watermelon";
    let subFruit = fruit.slice(0, 5); // extracts characters from index 0 to 4
    // endIndex is not included
    console.log (subFruit); // Water
    // if endIndex is not provided , it extracts till the end of string
    let subFruit2 = fruit.slice(5); // extracts characters from index 5 to end
    console.log (subFruit2); // melon

    // negative indexing
    let subFruit3 = fruit.slice(-5); // extracts last 5 characters
    console.log (subFruit3); // melon
    let subFruit4 = fruit.slice(-8, -3); // extracts characters from index -8 to -4
    console.log (subFruit4); // terme
    // original string remains unchanged
    console.log (fruit); // Watermelon


// 5. replace() method :- replaces a specified value with another value in a string
    // stringName.replace(oldValue, newValue)
    let language = "JavaScript is fun";
    let newLanguage = language.replace("fun", "awesome");
    console.log (newLanguage); // JavaScript is awesome
    console.log (language); // JavaScript is fun
    // original string remains unchanged

// 6. includes() method :- checks if a string contains a specified value and returns true or false
// syntax :- stringName.includes(searchValue,startPostion)
// searchValue is the value to search for in the string
// startPosition is optional parameter that specifies the position in the string to start the search. Default is 0
let str = "JavaScript";

console.log(str.includes("Script"));
// true
let str2 = "hello world";

console.log(str2.includes("hello", 1));
// false, because search starts from index 1 and "hello" is at index 0

// 7. substring() :- 
// extracts a part of string 
// string.substring(startIndex, endIndex)
// startIdex :- included
// end index :- not included
let str3 = "JavaScript";

console.log(str3.substring(0,4));
//Java

// if endIndex is not provided , it extracts till the end of string

let str4 = "JavaScript";
console.log(str4.substring(4));
//Script

// if startIndex > endIndex , it swaps the two indexes
let str5 = "JavaScript";
console.log(str5.substring(4,0));
//Java

// negative indexing is not allowed in substring() method
// they are treated as 0
let str6 = "JavaScript";
console.log(str6.substring(-4, 4));
//Java

// differeence between slice() and substring()
// 1. slice() allows negative indexing , substring() does not
// 2. if startIndex > endIndex , slice() returns empty string , substring() swaps the two indexes