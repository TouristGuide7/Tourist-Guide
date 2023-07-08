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
