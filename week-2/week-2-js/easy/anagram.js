/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let int_str1 = Array.from(str1).map(char => char.charCodeAt(0));
  let int_str2 = Array.from(str2).map(char => char.charCodeAt(0));

  if (int_str1.length !== int_str2.length) {
    return false;
  }

  let sortedArr1 = int_str1.slice().sort((a, b) => a - b);
  let sortedArr2 = int_str2.slice().sort((a, b) => a - b);

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }
  
  return true;
}

module.exports = isAnagram;
