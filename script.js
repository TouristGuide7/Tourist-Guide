function user(){
  const gName = document.getElementById("userName")
  const gCity = document.getElementById("userCity")
  let localName = localStorage.getItem("userName")
  let localCity = localStorage.getItem("cityName")
  gName.innerHTML += localName
  gCity.innerHTML += localCity
}

user()


const touristAPI = "data.json"
async function newFunction(){
  const response = await fetch(touristAPI)
  const data = await response.json()

  console.log(data);
}

newFunction()




