const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(options){
  options = options || {};
  options.color = DEFAULTS.COLOR;
  options.position = options.position;
  options.radius = DEFAULTS.RADIUS;
  options.velocity = options.velocity;

  MovingObject.call(this,options);
}
Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
