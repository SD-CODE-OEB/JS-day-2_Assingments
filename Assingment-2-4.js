//A JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not.

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
     return str === reversed;
}