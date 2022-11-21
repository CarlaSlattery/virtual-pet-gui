import Pet from "./pet.js";

(function exportController() {
  class Controller {
    constructor() {
      this.pet = null;
    }
    initialisePet(name) {
      this.pet = new Pet(name);
    }
  }

  const ageElement = document.querySelector("#petAge");
  const hungerElement = document.querySelector("#petHunger");
  const fitnessElement = document.querySelector("#petFitness");

  const adopt = document.querySelector("#dogAdopt");
  adopt.addEventListener("click", () => {
    const controller = new Controller();
    controller.initialisePet("Frank");
    ageElement.innerHTML = ` ${controller.pet.age}`;
    hungerElement.innerHTML = ` ${controller.pet.hunger}`;
    fitnessElement.innerHTML = ` ${controller.pet.fitness}`;
    console.log(controller.pet);
  });
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.controller = new Controller();
  }
})();
