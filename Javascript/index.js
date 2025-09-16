function losAngelesGetTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".Date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".Time");
  losAngelesDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment().format(
    "h:mm:ss [<small>] A[</small>]"
  );
}
function sydneyGetTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".Date");
  let sydneyTimeElement = sydneyElement.querySelector(".Time");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM Do YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>] A[</small>]");
}

setInterval(losAngelesGetTime, 1000);
setInterval(sydneyGetTime, 1000);
