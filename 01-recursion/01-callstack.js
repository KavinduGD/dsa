function takeShower() {
  //   return "Showering!";
  console.log("wake up bitch");
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

//f5 -> node
//call stack is the data structure that manage function that have been called
//new functions are add to the top of the stack
// after the the execution the get removed (new once get removed first)
