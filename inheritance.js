// Function.prototype.myInherits = function(parent) {
//   function Surrogate() {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.constructor = this;
// };

Function.prototype.myInherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};


function MovingObject () {}
MovingObject.prototype.move = function() {
  console.log("I am moving");
};

function Ship () {}
Ship.myInherits(MovingObject);
Ship.prototype.rockets = function() {
  console.log("Is that a rocket in your pocket?");
};


function Asteroid () {}
Asteroid.myInherits(MovingObject);
Asteroid.prototype.rocks = function() {
  console.log("I got rocks");
};


console.log(Ship.prototype);
console.log(Asteroid.prototype);
const a = new Asteroid();
a.move();
a.rocks();
// a.rockets();

const s = new Ship();
s.move();
s.rockets();
s.rocks();
