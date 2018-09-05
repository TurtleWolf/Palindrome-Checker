function palindrome(str) {
    let huhText = str;
    let myRegex = /[^a-z0-9]/ig;
    let replaceText = ""; // Change this line
    let result = huhText.replace(myRegex, replaceText).toLowerCase();
    let rts = result.split("").reverse().join("").toLowerCase();
    let stR = result;

    if (stR == rts) {
        console.log(rts);
        console.log("true");
        return true;
    } // end of rts being equal
    else { //default = not a palindrome
        console.log(str);
        console.log(rts);
        console.log("false");
        return false;
    } // end of default, assume it's not a palindrome
} //end of palindrome function call

palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.