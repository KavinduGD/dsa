/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N) */

function sameFrequency(number1, number2) {
  const num1 = String(number1);
  const num2 = String(number2);

  console.log(num1);
  console.log(num2);

  if (num1.length !== num2.length) return false;

  const frq1 = {};
  const frq2 = {};

  for (let i = 0; i < num1.length; i++) {
    frq1[num1[i]] = (frq1[num1[i]] || 0) + 1;
    frq2[num2[i]] = (frq2[num2[i]] || 0) + 1;
  }

  for (const key in frq1) {
    if (frq1[key] !== frq2[key]) {
      return false;
    }
  }

  return true;
}

const result = sameFrequency(55422, 224551);
console.log(result);
