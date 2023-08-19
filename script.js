function buttonRender(num){
  localStorage.setItem("numValue" , num)
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
const mainCountry = document.querySelectorAll(".mainCountry")
const totalCardLength = document.querySelectorAll(".cardItem")



const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()
  for(let i = 0 ; i < totalCardLength.length; i++){
    travelCity[i].innerHTML = data.winter[i].country
    countryDiscription[i].innerHTML = data.winter[i].smallDiscription
    continent[i].innerHTML = data.winter[i].continent
    countryCulture[i].innerHTML += `: ${data.winter[i].culture}`
    countryImage[i].src = data.winter[i].imgUrl
  }
  // for(let j = 0; j < mainCountry.length; j++){
  //   mainCountry[j].innerHTML = data.world[j].winter[i].country
  // }
  // for(let i= 0; i < famousCountry.length; i++){
  //   famousCountry[i].innerHTML = data.famousPlace[i].place
  // }

}

newFunction()




