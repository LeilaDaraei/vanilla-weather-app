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
  let cityElement = response.data.city;
  let currentTempElement = Math.round(response.data.temperature.current);
  let descriptionElement = response.data.condition.description;
  let iconElement = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`;
  let speedElement = Math.round(response.data.wind.speed);
  let humidityElement = response.data.temperature.humidity;
  let timeElement = response.data.time * 1000;
  console.log(response.data);
  let icon = document.querySelector("#icon");
  let city = document.querySelector("#city");
  let temp = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let speed = document.querySelector("#speed");
  let humidity = document.querySelector("#humidity");
  let time = document.querySelector("#hour");

  icon.setAttribute("src", iconElement);
  city.innerHTML = cityElement;
  temp.innerHTML = currentTempElement;
  description.innerHTML = descriptionElement;
  speed.innerHTML = speedElement + " km/h";
  humidity.innerHTML = humidityElement + " %";
  time.innerHTML = formatDate(timeElement);
}
let apiKey = "9f5f4t4a17f1b05b1oda4343d82d064d";
let query = "kish";
let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

axios.get(url).then(displayTemp);

// function showCityTemp(event) {
//   event.preventDefault();
//   let city = document.querySelector(".frm.value");
// }

// let submitbtn = document.querySelector("#submit");
// submitbtn.addEventListener("submit", showCityTemp);
