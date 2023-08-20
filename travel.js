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
const countryImage = document.querySelectorAll(".countryImage")

const mainCardBtnValue = document.getElementById("cardMainButton")

console.log(mainCardBtnValue.value);

const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()

if(mainCardBtnValue.value = "winter"){
  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.winter[i].country
    countryImage[i].src = data.winter[i].imgUrl
  }
}
else if(mainCardBtnValue.value = "autumn"){
  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.autumn[i].country
    countryImage[i].src = data.autumn[i].imgUrl
  }
}
else if(mainCardBtnValue.value = "spring"){
  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.spring[i].country
    countryImage[i].src = data.spring[i].imgUrl
  }
}
else if(mainCardBtnValue.value = "summer"){
  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.summer[i].country
    countryImage[i].src = data.summer[i].imgUrl
  }
}
}

newFunction()