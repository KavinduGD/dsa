function printNumbers(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  printNumbers(num);
}

printNumbers(100);
