function square() {
  cached = {}
  const memoizedSquare = (number) => {
    if (number in cached) {
      console.log("Cached");
      return cached[number];
    }
    cached[number] = number * number;
    return cached[number];
  };
  return memoizedSquare;
}

const squareNumber = square();
console.log("Sqaure of 7: ", squareNumber(7));
console.log("Sqaure of 8: ", squareNumber(8));
console.log("Sqaure of 7: ", squareNumber(7));
