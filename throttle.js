// Implement throttle using setTimeout()

function throttle(fn, time) {
  let throttled;
  return function () {
    if (!throttled) {
      fn.apply(this, arguments);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, time);
    }
  };
}

const logger = (arg) => {
  console.log(arg);
};

const throttleLogger = throttle(logger, 2000);

throttleLogger(1);
throttleLogger(2);
throttleLogger(3);
throttleLogger(4);
throttleLogger(5);
throttleLogger(6);
throttleLogger(7);
throttleLogger(8);
