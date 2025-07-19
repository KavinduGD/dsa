function filterOdds(arr) {
  //outer variable
  const odds = [];

  function helper(arr) {
    //() base condition
    if (arr.length === 0) return;
    //check the first element
    if (arr[0] % 2 === 1) odds.push(arr[0]);
    //slice the array and remove the first element
    helper(arr.slice(1));
  }

  helper(arr);

  return odds;
}

const odds = filterOdds([2, 4, 2, 5, 774, 45, 456, 7, 752, 234, 78, 1]);
console.log(odds);
