let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".Date");
let losAngelesTimeElement = losAngelesElement.querySelector(".Time");
losAngelesDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment().format(
  "h:mm:ss [<small>] A[</small]"
);
