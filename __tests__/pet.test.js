const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });
  it("has an initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it("increments hunger by 5 for each increase in age of 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it("decreases fitness by 3 with each increase in age", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  it("increases fitness to maximum of 10", () => {
    const pet = new Pet("Fido");
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});
describe("feed", () => {
  it("decreases pet hunger level by 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
});
describe("checkUp", () => {
  it("alerts needs a walk when fitness in 3 or less", () => {
    const pet = new Pet("Fido");
    pet.fitness = 2;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I need a walk");
  });
  it("alerts needs feeding when hunger is 5 or more", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am hungry");
  });
  it("alerts needs feeding and walking when hunger is 5 or more and fitness is 3 or less", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });
  it("alerts feels great if none of the above criteria are true", () => {
    const pet = new Pet("Fido");
    pet.hunger = 3;
    pet.fitness = 8;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I feel great!");
  });
});
describe("isAlive", () => {
  it("returns false if fitness is 0 or less", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });
  it("returns false if hunger is 10 or more", () => {
    const pet = new Pet("Fido");
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  });
  it("returns false if age is 30 or more", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
  it("returns true if none of the above criteria are met", () => {
    const pet = new Pet("Fido");
    pet.age = 20;
    pet.hunger = 5;
    pet.fitness = 8;
    pet.isAlive;
    expect(pet.isAlive).toEqual(true);
  });
});
