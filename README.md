Here all Interview questions with answers 

1. What is JavaScript ?
   JavAscript is a high - level , interpreted , dynamically typed programming language used to create interactive nad dynamic web pages.

2. Why is JavaScript used in web development ?
    Javscript is used to add interactivity , handle events , maniputlate tha DOM
    and perform client- side logic in web applications 

3.  What do you mean by dynamically typed language ?
    It is the language in which the data type of a variable is determined at runtime and does not need to be explicitly declared.

4.  Where does JavaScript code run ?
    It runs inside a JS engine present in web browsers , such as V8 engine in Google chrome.

5.  What is the difference between var , let and const ?
    var -> function scoped , declaration allowed 
    let -> block scoped , redeclaration not allowed
    const -> block scoped , redeclaration and reassignment allowed

6.  Why is const preferred over let ?
    const is preferred because it prevents reassignment and helps write safer and more pedictable code.

7.  Are strings mutable in Javascript ?
    No, strings in Js are immutable , meaning their characters cannot be modified once created.

8.  If strings are immutable , how can they be assigned ?
    Strings are immutable , but variables are mutable. Reassignment creates a new string and update the variable to reference the new string.

9.  What are template literals ?
    Template literals are strings enclosed in backticks that allow embedding of variables and expressions using ${};

10. What does it means that JS is interpreted ?
    It means JS code is executed line by line the JS engine without prior compilation.

11. What is HTML parsing in relation to JS ?
    HTML parsing is the process by which the browser reads HTML code and constructs the DOM  structure before JS interacts with it 

12. What are Data Types in JavaScript ?
    It defines the type of value of variable can hold such as number , string or boolean 

13. What are primitive data types in JS ?
    7 :- String , Number , Boolean , Null, Undefined , BigInt , Symbol

14. What are Non primitive data types ?
    Arrays, Objects and Functions

15. Why does typeof null return object ?
    It is a known bug in JS retained for backward compatibilty.

16. Difference between == and ===?
    == -> compares the value after type conversion (checks only value )
    === -> compares both value and type 

17. What are truthy and falsy values ? 
    Falsy values :- null , undefined , "",0 and NaN.
    All other values are truthy.

18. What is Array in JS?
    An array is a data structure used to store multiple vaues in a single variable in an ordered manner.

19. Are arrays primitive or non - primitive ?
    Arrays are non -primitive data types in JS.

20. What is the index of first element in an array ?
    The index of first element is 0.

21. Why are arrays called referece types ?
    Because variables stores references to the array in memory , not the actual values.

22. How do you clone an array ?
    An array can be cloned using the spread operator , slice nad concat method.

23. What is the spread operator ?
    The spread (...) is used to expand elements of an array into an new array.

24. Differece between for , for ...of , for ...in ? 
    for -> index based
    for ... of -> iterates over value
    for ...in -> iterates over indexes






















// Doubtful question section 

Can the value of const variable be changed ?\
No , a const variable cannot be reassigned after deaclaration . However , the contents of objects or arrays declared with const can be modified .


