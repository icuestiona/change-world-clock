function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = luxon.DateTime.now().setZone("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.toFormat("MMMM d, yyyy");
    newYorkTimeElement.innerHTML = newYorkTime.toFormat("HH:mm:ss");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = luxon.DateTime.now().setZone("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.toFormat("MMMM d, yyyy");
    sydneyTimeElement.innerHTML = sydneyTime.toFormat("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = luxon.DateTime.local().zoneName;
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = luxon.DateTime.now().setZone(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.toFormat("MMMM d, yyyy")}</div>
    </div>
    <div class="time">${cityTime.toFormat("HH:mm:ss")} 
    </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);

//
