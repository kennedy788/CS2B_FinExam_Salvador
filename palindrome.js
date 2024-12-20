let word1 = prompt("Enter the first word:", "RACECAR");
let word2 = prompt("Enter the second word:", "RECORDER");

function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  console.log(`Original string: ${word}`);
  console.log(`Reversed string: ${reversed}`);
  return word === reversed;
}

console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);
console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);
