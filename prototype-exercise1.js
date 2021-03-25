function Icecream(name, flavour) {
  this.name = name;
  this.flavour = flavour;
}

Icecream.prototype.getIceCreamName = function () {
  console.log("Icecream: ", this.name);
};

Icecream.prototype.getFlavour = function () {
  console.log("Icecream Flavour: ", this.flavour);
};

const corrento = new Icecream("corrento","chocolate");

console.log("All props")
for (key in corrento) {
  console.log(key," ",corrento[key]);
}

console.log("Own properties")
for (key in corrento) {
    if(corrento.hasOwnProperty(key)){

        console.log(key," ",corrento[key]);
    }
  }

