// let urlLonLat = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}`;

function displayTemp(response) {
  let apiKey = "9f5f4t4a17f1b05b1oda4343d82d064d";
  let query = "London";
  let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
}

axios.get(url).then(displayTemp);

function showCityTemp(event) {
  event.preventDefault();
  let h1Text = document.querySelector("h1");
  let city = document.querySelector(".frm.value");
  h1Text.innerHTML = city;
}

let submitbtn = document.querySelector("#submit");
submitbtn.addEventListener("submit", showCityTemp);
