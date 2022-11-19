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
      option.value = breedsArray[i]; //<option value = "breed">breed</option>
      option.innerText = breedsArray[i];
      select.appendChild(option); //adds current<option> tag to the select box list of options
    }
  });

select.addEventListener("change", (event) => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  console.log(url);
});

//const img = document.querySelector("");
