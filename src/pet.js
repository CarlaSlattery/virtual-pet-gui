const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < MAXIMUM_AGE &&
      this.hunger < MAXIMUM_HUNGER &&
      this.fitness > MINIMUM_FITNESS
    );
  },
};

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.hunger > 3) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.hunger >= 5 && this.fitness <= 3) {
    return "I am hungry AND I need a walk";
  } else if (this.hunger >= 5) {
    return "I am hungry";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else {
    return "I feel great!";
  }
};

Pet.prototype.haveBaby = function (babyName) {
  const newBaby = new Pet(babyName);
  this.children.push(newBaby);
};

module.exports = Pet;
