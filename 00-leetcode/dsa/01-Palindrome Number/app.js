var isPalindrome = function (number) {
  let numberStr = String(number);

  for (let i = 0; i < Math.floor(numberStr.length / 2); i++) {
    if (numberStr[i] !== numberStr[numberStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome(-33434));
console.log(isPalindrome(1001));

// 101

// 203
