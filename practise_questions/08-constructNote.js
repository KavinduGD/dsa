/*
 Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N) 
*/
function constructNote(message, letters) {
  const frq1 = {};
  const frq2 = {};

  for (let i = 0; i < message.length; i++) {
    frq1[message[i]] = (frq1[message[i]] || 0) + 1;
  }

  for (let i = 0; i < letters.length; i++) {
    frq2[letters[i]] = (frq2[letters[i]] || 0) + 1;
  }

  for (const letter in frq1) {
    if (!(frq1[letter] <= frq2[letter])) {
      return false;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
