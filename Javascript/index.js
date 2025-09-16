function losAngelesGetTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".Date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".Time");
    losAngelesDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = moment().format(
      "h:mm:ss [<small>] A[</small>]"
    );
  }
}
function sydneyGetTime() {
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".Date");
    let sydneyTimeElement = sydneyElement.querySelector(".Time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM Do YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>] A[</small>]");
  }
}
function getCityData(event) {
  let selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let cityName = selectedCity.replace("_", " ").split("/")[1];
  let citiesContainerElement = document.getElementById("CitiesContainer");
  let selectedCityDate = moment().tz(selectedCity).format("dddd, MMMM Do YYYY");
  let selectedCityTime = moment()
    .tz(selectedCity)
    .format("h:mm:ss [<small>] A[</small>]");
  citiesContainerElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="Date">${selectedCityDate}</div>
          </div>
          <div class="Time">${selectedCityTime}</div>
        </div>
        <a href="/">Back to home</a>`;
}

setInterval(losAngelesGetTime, 1000);
setInterval(sydneyGetTime, 1000);
let selectedcity = document.getElementById("city-selection");
selectedcity.addEventListener("change", getCityData);
