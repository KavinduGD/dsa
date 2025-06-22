let fish = ["nemo", "shark", "clown fish"];

fish = new Array(100000).fill("nemo");

const start = performance.now();

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "nemo") {
      console.log("We found nemo");
    } else {
      console.log("Oops not nemo");
    }
  }
}

findNemo(fish);

const end = performance.now();

console.log(`Time taken: ${(end - start).toFixed(12)} ms`);
