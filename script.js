// Dom selection
const BARel = document.querySelector(".menu-bar");
const navel = document.querySelector(".navbar");

BARel.addEventListener("click", () => {
  navel.classList.toggle("slide");
  BARel.classList.toggle("wcolor");
});
