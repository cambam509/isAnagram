/*
Write a function that accepts two strings and returns a boolean indication if the two strings are anagrams.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, like "coat" and "taco." Anagrams should ignore spaces, punctuation, and capitalization. (For this exercise, you can also consider any sequence of letters to be a word.)
*/

function isAnagram(string1, string2) {
  // if the same word is passed in for both arguments, meaning they match...
  if (string1 === string2) {
    // ...return true
   return true;
 }
  //  (in every other case) Remove any special characters, spaces, uppercase letters, or punctuation from each string, then sort letters (can chain methods together)
 string1 = string1.replace(/[\. ,:-]+/g, "").toLowerCase().split('').sort().join('');
 string2 = string2.replace(/[\. ,:-]+/g, "").toLowerCase().split('').sort().join('');
  // If after removing all unnecessary characters the lengths of the words don't match...
 if (string1.length !== string2.length) {
  // ...we know we don't have an anagram, so return false
   return false;
 }
  // console.log(string1);
  // console.log(string2);
  // Otherwise, look at each letter in the first string and compare it to letter at the same spot in the second string
 for (var i = 0; i < string1.length; i++) {
   // if we have a match at each place...
   if (string1[i] === string2[i]) {
     // ...return true
     return true;
     // else, return false
   } else {
     return false;
   }
 }
}

console.log(isAnagram('coat.', 'ta cO'));

