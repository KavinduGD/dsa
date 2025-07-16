function validAnagram(text1, text2) {
  //length check
  if (text1.length !== text2.length) {
    return false;
  }
  //get frq O(n)
  let frq1 = {};
  let frq2 = {};

  for (let letter of text1) {
    frq1[letter] = (frq1[letter] || 0) + 1;
  }

  for (let letter of text2) {
    frq2[letter] = (frq2[letter] || 0) + 1;
  }

  //compare frq objects O(n)
  for (const key in frq1) {
    if (frq1[key] !== frq2[key]) {
      return false;
    }
  }

  //character order
  //   for (let i = 0; i < text1.length; i++) {
  //     if (text1[i] !== text2[i]) {
  //       return true;
  //     }
  //   }

  return true;
}

console.log(validAnagram("kavidu", "kavid"));
console.log(undefined + 1);
