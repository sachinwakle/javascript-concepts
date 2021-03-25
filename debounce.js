// Implement debounce using setTimeout

function debounce(fn, wait) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

const logger = (arg) => {
  console.log(arg);
};

const debounceLogger = debounce(logger, 2000);

debounceLogger(1);
debounceLogger(2);
debounceLogger(3);
debounceLogger(4);
debounceLogger(5);
debounceLogger(6);
debounceLogger(7);
debounceLogger(8);
