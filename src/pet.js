const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;
const MIN_AGE = 0;

export default class Pet {
  constructor(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  }
  get isAlive() {
    return (
      this.age < MAXIMUM_AGE &&
      this.hunger < MAXIMUM_HUNGER &&
      this.fitness > MINIMUM_FITNESS
    );
  }
  growUp() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
  }
  walk() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    } else if (this.fitness + 4 <= MAXIMUM_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  }
  feed() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    } else if (this.hunger > 3) {
      this.hunger -= 3;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
  }
  checkUp() {
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
  }
}
