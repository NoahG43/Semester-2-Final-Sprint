// alert("Hello, I am an alert");
const button = document.getElementById("btn");
const image = document.getElementById("img");
const img = document.getElementById("background");
const p = document.getElementById("text");

button.addEventListener("click", () => {
  if (img.style.display === "none") {
    img.style.display = "block";
    p.style.display = "none";
  } else {
    img.style.display = "none";
    p.style.display = "flex";
  }
});
