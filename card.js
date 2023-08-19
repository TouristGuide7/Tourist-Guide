function user() {
  const gName = document.getElementById("userName");
  const gCity = document.getElementById("userCity");
  let localName = localStorage.getItem("userName");
  let localCity = localStorage.getItem("cityName");
  gName.innerHTML += localName;
  gCity.innerHTML += localCity;
}
user();
let getNumValue = localStorage.getItem("numValue");

const countryDiscription = document.getElementById("description");
const country = document.getElementById("country");
const touristAPI = "data.json";
async function newFunction() {
  const response = await fetch(touristAPI);
  const data = await response.json();
  function card(a) {
    countryDiscription.innerHTML = data.winter[a].description;
    country.innerHTML = data.winter[a].country;
  }
  card(getNumValue);
}
newFunction();
