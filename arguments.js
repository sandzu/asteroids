const sum = function(...args){
  let sum = 0;
  // for (var i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }
  args.forEach((el)=>{
    sum = sum + el;
  });
  return sum;
};
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function(context, ...args){
  return (...callTimeArgs)=>{
    this.apply(context, args.concat(callTimeArgs));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
console.log("WHAT AM I", markov.says.myBind(breakfast, "meow"));//("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true


const curriedSum = function(numArgs) {
  const numbers = [];

  function _curriedSum(n) {

    numbers.push(n);

    if (numbers.length === numArgs) {

      return numbers.reduce((acc, el)=> {
        return (acc + el);
      });

    } else {
      return true; //_curriedSum.bind(_curriedSum);
    }
  }

  return _curriedSum;
};

Function.prototype.myCurry = function(numArgs){
  const args = [];
  let callback = this;

  function _curriedArgs(element){
    args.push(element);
    if(args.length === numArgs){
      return Function.prototype.apply(callback, args);
      // return callback(args);
    }
    else{
      return _curriedArgs;
    }
  }

  return _curriedArgs;
};

function sumArr(arr) {
  return arr.reduce((acc, el)=>{
    return (acc+el);
  });
}

let sumCurry = sumArr.myCurry(2);
console.log(sumCurry(1));
console.log(sumCurry(1));
// console.log(sumCurry(1));
