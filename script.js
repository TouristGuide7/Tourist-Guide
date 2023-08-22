function buttonRender(num, place){
  localStorage.setItem("numValue" , num)
  localStorage.setItem("placeValue" , place)
}



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
const continent = document.querySelectorAll(".country1")
const countryCulture = document.querySelectorAll(".culture")
const countryImage = document.querySelectorAll(".countryImage")
const famousCountry = document.querySelectorAll(".fCountry")
const famousCountryImg = document.querySelectorAll(".fImg")
const mainCountry = document.querySelectorAll(".mainCountry")
const totalCardLength = document.querySelectorAll(".cardItem")
let mainButton = document.getElementById("mainBtn")


const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()


  if(mainButton.value == "winter"){
    for(let i = 0 ; i < totalCardLength.length; i++){
      travelCity[i].innerHTML = data.winter[i].country
      countryDiscription[i].innerHTML = data.winter[i].smallDiscription
      continent[i].innerHTML = data.winter[i].continent
      countryCulture[i].innerHTML += `: ${data.winter[i].culture}`
      countryImage[i].src = data.winter[i].imgUrl
    }
  }
  else if(mainButton.value == "summer"){
    for(let i = 0 ; i < totalCardLength.length; i++){
      travelCity[i].innerHTML = data.summer[i].country
      countryDiscription[i].innerHTML = data.summer[i].smallDiscription
      continent[i].innerHTML = data.summer[i].continent
      countryCulture[i].innerHTML += `: ${data.summer[i].culture}`
      countryImage[i].src = data.summer[i].imgUrl
    }
  }
  else if(mainButton.value == "autumn"){
    for(let i = 0 ; i < totalCardLength.length; i++){
      travelCity[i].innerHTML = data.autumn[i].country
      countryDiscription[i].innerHTML = data.autumn[i].smallDiscription
      continent[i].innerHTML = data.autumn[i].continent
      countryCulture[i].innerHTML += `: ${data.autumn[i].culture}`
      countryImage[i].src = data.autumn[i].imgUrl
    }
  }
  
  else if(mainButton.value == "spring"){
    for(let i = 0 ; i < totalCardLength.length; i++){
      travelCity[i].innerHTML = data.spring[i].country
      countryDiscription[i].innerHTML = data.spring[i].smallDiscription
      continent[i].innerHTML = data.spring[i].continent
      countryCulture[i].innerHTML += `: ${data.spring[i].culture}`
      countryImage[i].src = data.spring[i].imgUrl
    }
  }
const famousImg = document.getElementById("famousImg")
const famousDescription = document.getElementById("famousDescription")
  for(let i= 0; i < famousCountry.length; i++){
    famousCountry[i].innerHTML = data.famous_places[i].country
    famousImg.src = data.famous_places[5].imgUrl
    famousDescription.innerHTML = data.famous_places[5].description
  }
}

newFunction()










