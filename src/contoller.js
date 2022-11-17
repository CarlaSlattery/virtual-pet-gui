//import { Pet } from "./pet.js";
//import Pet from "../src/pet";
(function exportDog() {
  const MAXIMUM_FITNESS = 10;
  const MINIMUM_FITNESS = 0;
  const MAXIMUM_HUNGER = 10;
  const MINIMUM_HUNGER = 0;
  const MAXIMUM_AGE = 30;
  class Dog {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.hunger = MINIMUM_HUNGER;
      this.fitness = MAXIMUM_FITNESS;
    }
    renderStats() {
      const ageElement = document.querySelector("#petAge");
      return (ageElement.innerHTML = ` ${this.age}`);
    }
    dogTranslator(message) {
      const dogMessageElement = document.createElement("p");
      dogMessageElement.id = "message";
      dogMessageElement.innerHTML = message;

      const speechBubble = document.querySelector("#translator");
      speechBubble.appendChild(dogMessageElement);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Dog;
  } else {
    window.Dog = Dog;
  }
})();
