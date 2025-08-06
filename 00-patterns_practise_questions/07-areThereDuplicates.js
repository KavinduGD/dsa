/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

function areThereDuplicates(...n) {
  const frq = {};
  for (let i = 0; i <= n.length; i++) {
    if (!frq[n[i]]) {
      frq[n[i]] = 1;
    } else {
      return true;
    }
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
