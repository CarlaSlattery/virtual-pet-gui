import { Pet } from "./pet.js";

const pet = new Pet("Frank");
class Controller {
  constructor(pet) {
    document.querySelector("#dogAdopt").addEventListener("click", () => {
      this.adopt();
    });
  }
  adopt() {
    let statsDiv = document.createElement("div");
    statsDiv.id = "petStats";

    const vitalStats = document.querySelector("#vitalStats");
    vitalStats.appendChild(statsDiv);

    document
      .getElementById("#dogAdopt")
      .addEventListener("click", initialisePet);
    function initialisePet() {
      let age = document.getElementById("petAge");
    }
  }
  updateStats() {}
  dogTranslator(message) {
    const dogMessageElement = document.createElement("p");
    dogMessageElement.id = "message";
    dogMessageElement.innerHTML = message;
  }
}

module.exports = Controller;
