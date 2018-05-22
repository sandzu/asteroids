const Util = {
  inherits(child, parent){
    function Surrogate (){}
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;

    // child.prototype = Object.create(parent.prototype);
    // child.prototype.constructor = child;
  }


};


module.exports = Util;
