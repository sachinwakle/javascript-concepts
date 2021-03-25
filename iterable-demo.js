const range = {
  [Symbol.iterator]: function () {
    let count = 1;
    iterator = {
      next: function () {
        if (count >= 51) {
          return { value: undefined, done: true };
        } else {
          return { value: count++, done: false };
        }
      },
    };
    return iterator;
  },
};

for (let num of range) {
  console.log(num);
}
