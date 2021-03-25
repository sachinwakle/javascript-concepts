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

function Cornetto(name, flavour, color) {
  Icecream.call(this, name, flavour);
  this.color = color;
}

Cornetto.prototype = Object.create(Icecream.prototype);
Cornetto.prototype.getColor = function () {
  console.log("Icecream color: ", this.color);
};

const item2 = new Cornetto("Foo", "pista", "brown");
item2.getIceCreamName();
item2.getFlavour();
item2.getColor();
