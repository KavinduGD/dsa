/* reverse

Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

function reverse(string) {
  if (string.length == 1) return string[0];
  return string[string.length - 1] + reverse(string.slice(0, -1));
}

console.log(reverse("awesome"));
