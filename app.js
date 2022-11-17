// let urlLonLat = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}`;
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurdsday",
    "Friday",
    "Saturday",
  ];
  return `${weekDays[day]} ${("0" + hours).slice(-2)}:${("0" + minutes).slice(
    -2
  )}`;
}

function displayTemp(response) {
  let icon = document.querySelector("#icon");
  let city = document.querySelector("#city");
  let temp = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let speed = document.querySelector("#speed");
  let humidity = document.querySelector("#humidity");
  let time = document.querySelector("#hour");

  celciusTemp = response.data.temperature.current;

  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  city.innerHTML = response.data.city;
  temp.innerHTML = Math.round(celciusTemp);
  description.innerHTML = response.data.condition.description;
  speed.innerHTML = Math.round(response.data.wind.speed) + " km/h";
  humidity.innerHTML = response.data.temperature.humidity + " %";
  let timeElement = response.data.time * 1000;
  time.innerHTML = formatDate(timeElement);
}

function search(city) {
  let apiKey = "9f5f4t4a17f1b05b1oda4343d82d064d";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

let celciusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function goFarenheit(event) {
  event.preventDefault();
  celcius.classList.remove("active");
  farenheit.classList.add("active");
  let farenheitTemp = (celciusTemp * 9) / 5 + 32;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(farenheitTemp);
}

function goCelcius(event) {
  event.preventDefault();
  farenheit.classList.remove("active");
  celcius.classList.add("active");
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celciusTemp);
}

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", goFarenheit);

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", goCelcius);

search("Hamburg");
