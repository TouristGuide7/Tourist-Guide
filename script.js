function user(){
  const gName = document.getElementById("userName")
  const gCity = document.getElementById("userCity")
  let localName = localStorage.getItem("userName")
  let localCity = localStorage.getItem("cityName")
  gName.innerHTML += localName
  gCity.innerHTML += localCity
}
user()
const travelCity = document.querySelectorAll(".localCity")
const countryDiscription = document.querySelectorAll(".description")
const country = document.querySelectorAll(".country1")
const countryCulture = document.querySelectorAll(".culture")
const famousCountry = document.querySelectorAll(".fCountry")


const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()
  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.world[i].place
    countryDiscription[i].innerHTML = data.world[i].smallDiscription
    country[i].innerHTML += data.world[i].country
    countryCulture[i].innerHTML += data.world[i].culture
    famousCountry[i].innerHTML = data.famousPlace[i].place
  }
}

newFunction()




