function naiveStringSearch(longString, shortString) {
  const longStringLength = longString.length;
  const shortStringLength = shortString.length;

  const index = [];
  //loop though long string
  //loop though short string

  let isMatch;

  for (let i = 0; i < longStringLength; i++) {
    isMatch = true;
    for (let j = 0; j < shortStringLength; j++) {
      if (shortString[j] !== longString[i + j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      index.push(i);
    }
  }

  return index;
}
const longString = "The rain in Spain falls mainly in the plain";
const shortString = "in";
const result = naiveStringSearch(longString, shortString);
console.log(result);
