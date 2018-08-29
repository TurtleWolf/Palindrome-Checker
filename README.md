# Palindrome-Checker

[JavaScript Algorithms and Data Structures Projects: Palindrome Checker](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker "FreeCodeCamp Palindrome Checker")  
```
function reverseString(str) {
  //Step 4. Return the reversed string
  var joinArray = str.split("").reverse().join("");
  //console.log(joinArray);
  return joinArray; // "olleh"
}//should be able to refactor this tighter, maybe as an anonymous function


function palindrome(str) {
let rts = reverseString(str); 
  // if str === rts return true
  
   if (str == rts) {
   
    console.log(rts);
    console.log("true");
    return true;
    
  }// end of rts being equal
  else {//default = not a palindrome
    console.log(str);
    console.log("false");
    return false;
    }// end of default, assume it's not a palindrome

}//end of palindrome function call
// this passes nearly half of the test, but does not compensate for non-alpha/numeric characters such as a space or underscore

palindrome("eye"); //should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.
```

```
function reverseString(str) {
  //Step 4. Return the reversed string
  var joinArray = str.split("").reverse().join("");
  console.log(joinArray);
  return joinArray; // "olleh"
}//should be able to refactor this tighter, maybe as an anonymous function
reverseString("hello");

function palindrome(str) {

  // if str === rts return true
  
   if (str == str) {
   
    console.log(str);
    
    return true;
    
  } else {//default = not a palindrome
    
    return false;
    
  }

}

palindrome("eye"); //should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.
```

```
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^1-9]/gi; // not vowel or number
let result = quoteSample.match(myRegex); // sample of regex
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
