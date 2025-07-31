/* 
isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false. 
*/

/* 
using previously created reversed method

function isPalindrome(string) {
  const originalString = string;

  function reverse(string) {
    if (string.length == 1) return string[0];
    return string[string.length - 1] + reverse(string.slice(0, -1));
  }

  const reversedString = reverse(string);

  return reversedString === originalString ? true : false;
}
 */

function isPalindrome(string) {
  const stringArr = string.split("");
  let bool = true;

  function check(stringArr) {
    if (stringArr.length == 1 || stringArr.length == 0 || bool == false)
      return bool;

    firstCharacter = stringArr.shift();
    lastCharacter = stringArr.pop();

    if (firstCharacter != lastCharacter) {
      bool = false;
    }

    return check(stringArr);
  }

  console.log(`check ${check(stringArr)}`);

  return check(stringArr);
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat")); // false
