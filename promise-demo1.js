const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Got pizza");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Didn't get pizza");
  }, 2000);
});

const onFullfillment = (response) => {
  console.log(response);
  console.log("set dining table");
};

const onRejection = (rejection) => {
  console.log(rejection);
  console.log("cook paneer sabji");
};

promise1.then(onFullfillment).catch(onRejection);
