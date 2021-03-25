var person = {
  name: "sachin",
  displayName() {
    console.log("My Name is: ", this.name);
  },
};

var per2 = person;
person = null;
per2.displayName();
