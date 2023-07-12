const gName = document.getElementById("getName")
const gCity = document.getElementById("getCity")
const names = document.getElementById("name")
const city = document.getElementById("city")


const btns = document.getElementById("checks").addEventListener("click", () =>{
  localStorage.setItem("UserName" , gName.value)
  localStorage.setItem("UserCity" , gCity.value)
  let localName = localStorage.getItem("userName")
let localCity = localStorage.getItem("userCity")
console.log(localName);
console.log(localCity);
})



const seasons = document.querySelector("#seasons");
const btn = document.getElementById("submit").addEventListener("click", () => {
  const seasonsElement = seasons.value;
  if (seasonsElement === "Summer") {
    document.getElementById("btnlink").href = "Tourist_Summer.html";
  } else if (seasonsElement === "Winter") {
    document.getElementById("btnlink").href = "Tourist_Winter.html";
  } else if (seasonsElement === "Autumn") {
    document.getElementById("btnlink").href = "Tourist_Automn.html";
  } else {
    document.getElementById("btnlink").href = "Tourist_Spring.html";
  }
});