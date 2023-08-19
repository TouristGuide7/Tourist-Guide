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
let getPlaceValue = localStorage.getItem("placeValue");
console.log(getPlaceValue);

const countryDiscription = document.getElementById("description");
const country = document.getElementById("country");
const mainCardImage = document.getElementById("mainCardImg")

const touristAPI = "data.json";
async function newFunction() {
  const response = await fetch(touristAPI);
  const data = await response.json();
  function card(num, place) {
    if(place == "winter"){
      countryDiscription.innerHTML = data.winter[num].description;
      country.innerHTML = data.winter[num].country;
      mainCardImage.src = data.winter[num].imgUrl
    }
    else if (place == "summer"){
      countryDiscription.innerHTML = data.summer[num].description;
      country.innerHTML = data.summer[num].country;
      mainCardImage.src = data.summer[num].imgUrl
    }
    else if (place == "spring"){
      countryDiscription.innerHTML = data.spring[num].description;
      country.innerHTML = data.spring[num].country;
      mainCardImage.src = data.spring[num].imgUrl
    }
    else if (place == "autumn"){
      countryDiscription.innerHTML = data.autumn[num].description;
      country.innerHTML = data.autumn[num].country;
      mainCardImage.src = data.autumn[num].imgUrl
    }
    else if (place == "famous_places"){
      countryDiscription.innerHTML = data.famous_places[num].description;
      country.innerHTML = data.famous_places[num].country;
      mainCardImage.src = data.famous_places[num].imgUrl
    }

  }
  card(getNumValue , getPlaceValue);
}
newFunction();
