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
  const controller = new Controller();
  const ageElement = document.querySelector("#petAge");
  const hungerElement = document.querySelector("#petHunger");
  const fitnessElement = document.querySelector("#petFitness");
  const happinessElement = document.querySelector("#petHappiness");

  function updateStats() {
    ageElement.innerHTML = ` ${controller.pet.age}`;
    hungerElement.innerHTML = ` ${controller.pet.hunger}`;
    fitnessElement.innerHTML = ` ${controller.pet.fitness}`;
    happinessElement.innerHTML = ` ${controller.pet.happiness}`;
  }

  const adopt = document.querySelector("#dogAdopt");
  adopt.addEventListener("click", () => {
    controller.initialisePet("Frank");
    updateStats();
    console.log(controller.pet);
  });

  const growUpButton = document.querySelector("#growUp");
  growUpButton.addEventListener("click", () => {
    controller.pet.growUp();
    updateStats();
  });

  const feedButton = document.querySelector("#feedPet");
  feedButton.addEventListener("click", () => {
    controller.pet.feed();
    updateStats();
  });

  const walkButton = document.querySelector("#walkPet");
  walkButton.addEventListener("click", () => {
    controller.pet.walk();
    updateStats();
  });

  const playButton = document.querySelector("#playPet");
  playButton.addEventListener("click", () => {
    controller.pet.play();
    updateStats();
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.controller = new Controller();
  }
})();
