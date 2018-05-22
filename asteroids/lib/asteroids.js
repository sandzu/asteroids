console.log("Webpack is working!");
// document.ObjectListener(add_event_listener)
const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 500;
canvasEl.height = 500;
canvasEl.fillStyle = "black";
const ctx = canvasEl.getContext("2d");
ctx.fillRect(0,0,canvasEl.width, canvasEl.height);
//general canvas setup


const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
window.MovingObject = MovingObject;

let options = {position: [50,50], velocity:[100,100], radius: 50, color: "yellow"};
let m = new MovingObject(options);
m.draw(ctx);

let a = new Asteroid(options);
a.draw(ctx)


window.asteroid = Asteroid;
