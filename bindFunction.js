// const bindfun = bind(fn,context);

function bind(fn, context) {
  return fn.bind(context);
}

function dispName(secondName) {
  console.log("My name is ", this.name, " 2nd Name: ", secondName);
}

const person = {
  name: "sachin",
};

var myName = bind(dispName, person);
myName("sa");

Function.prototype.bind = function (context) {
  fn = this;
  return function () {
    fn.apply(context, [...args]);
  };
};

