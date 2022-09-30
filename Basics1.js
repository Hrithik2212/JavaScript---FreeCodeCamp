console.log("Hello World");

var number =5;// in-line comment 
console.log(number);

/* Multi 
line comment 
*/

number = 9 ; 

// Data types and variables 

/* Dara types of javascript 
-> undefined
-> null 
-> boolean
-> string 
-> symbol 
-> number
-> object 
*/

// Variable 
/* var - Global scope 
let - local scope
const - Non changable variable - constant */

var myName = "Hrithik";
console.log("My name is ",myName);
myName = 8; 

// Storing variables using assignment variable 

var a ; 
console.log(a)
var b = 2; 
a = 7 ; 
a--;
--a;
console.log(a)
b = a ; 
b++;
++b;
console.log(b);

// Float 
var decimal = 5.7;
console.log(decimal);
var product = 2 * 2.5;
console.log(product);

// String Concatenation 
var str1 = "Hrithik"; 
var str2 = " Reddy";
str1 += str2 
console.log(str1)
console.log(str1 == str2 )

// Find the length of the string 
str1len = str1.length
console.log("Length of Hrithik is ",str1len)

// Bracket notation to find the first character 

firstletterofHrithik = str1[0]
console.log(firstletterofHrithik)

//String immutable -> 
var mystr = "Hello World";
mystr[0] = "h"; // doesnt work but doesnt give error as well
console.log(mystr[mystr.length - 1]); // -ve index doesnt work 

// Arrays 

var myArray = [["John","Rick"] , 23 ];
console.log(myArray[0][1])
console.log(myArray)

// Append data to array using push function 

myArray.push(["Hrithik" , "Saketh"])
console.log(myArray);

// Remove the last element using pop function 
myArray.pop()
console.log(myArray)


