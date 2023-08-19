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



const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()
  console.log(data.winter[1].country);

  for(let i = 0 ; i < travelCity.length; i++){
    travelCity[i].innerHTML = data.winter[i].country
    countryImage[i].src = data.winter[i].imgUrl
  }

}

newFunction()