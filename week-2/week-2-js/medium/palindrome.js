/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
let res = "";
for (let s of str) {
    if (s.match(/[a-zA-Z0-9]/)) {
        res += s.toLowerCase();
    }
  }

  return (res === res.split('').reverse().join(''));
}

module.exports = isPalindrome;
