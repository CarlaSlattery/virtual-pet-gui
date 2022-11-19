import Pet from "./pet.js";

(function exportController() {
  const adopt = document.querySelector("#dogAdopt");
  class Controller {
    constructor() {
      this.pet = null;
    }
    initialisePet(name) {
      this.pet = new Pet(name);
    }
    adopt() {
      adopt.addEventListener("click", (event) => {
        let age = document.getElementById("petAge");
        age.innerHTML = `Age: ${this.age}`;
      });
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.controller = new Controller();
  }
})();
