const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const breedsObject = data.message; //Turn message into object
    const breedsArray = Object.keys(breedsObject); //Turn object into array
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i]; //option value = breedArray[i]value
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });
