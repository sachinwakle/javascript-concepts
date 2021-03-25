function memoized(callback) {
  cached = {};
  return function (...args) {
    key = args.toString();
    if (key in cached) {
      console.log("result from cached");
      return cached[key];
    }
    const result = callback(...args);
    cached[key] = result;
    return result;
  };
}

const add = memoized((num1,num2)=>num1+num2);
console.log(add(1,4));
console.log(add(1,4));
