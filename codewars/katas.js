// Task 1
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

const findSmallestInt = (arr) => Math.min(...arr);

// Task 2
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// Task 3
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const arr = [];

  for (let key in obj) {
    key.length === 5 && arr.push(key);
    obj[key].length === 5 && arr.push(obj[key]);
  }

  return arr;
}

// Task 4
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// Task 5
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }

  return res;
}

// Task 6
// https://www.codewars.com/kata/587593285448632b8d000143/

async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);

  const res = await CustomerAPI.getProfileAsync(user);

  const shippingRate = calculateShipping(shoppingCart, res.zipCode);

  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  );
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
