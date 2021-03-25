function* numberGenerator(start = 1, end = 50, interval = 1) {
  let count = start;
  while (count <= end) {
    yield count;
    count += interval;
  }
  return count;
}

const numbers1 = numberGenerator();

console.log([...numbers1]);

// for (let num of numbers) {
//   console.log(num);
// }

console.log("Range start=5,end=20,interval=2");
const number2 = numberGenerator(5, 20, 2);
console.log([...number2]);
