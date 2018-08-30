# Palindrome-Checker

[JavaScript Algorithms and Data Structures Projects: Palindrome Checker](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker "FreeCodeCamp Palindrome Checker")  
```
function palindrome(str) {
let huhText = str;
let myRegex = /[^a-z0-9]/ig;
let replaceText = ""; // Change this line
let result = huhText.replace(myRegex, replaceText);
let rts = result.split("").reverse().join("");
let stR = result;
    
  if (stR == rts) {
     console.log(rts);
     console.log("true");
  return true;
    }// end of rts being equal
  else {//default = not a palindrome
      console.log(str);
      console.log(rts);      
      console.log("false");
  return false;
    }// end of default, assume it's not a palindrome
}//end of palindrome function call

palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("My age is 0, 0 si ega ym."); // should return true.
//palindrome("_eye"); // should return true.
//palindrome("race car"); // should return true.
//palindrome("never odd or even"); // should return true.
//palindrome("0_0 (: /-\ :) 0-0"); // should return true.
```
[Three Ways to Reverse a String in JavaScript](https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb "medium")  
```
function reverseString(str) {
  //Step 4. Return the reversed string
  var joinArray = str.split("").reverse().join("");
  console.log(joinArray);
  return joinArray; // "olleh"
}//should be able to refactor this tighter, maybe as an anonymous function
reverseString("hello");
```
