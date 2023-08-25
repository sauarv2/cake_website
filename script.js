// Dom selection
//NAV BAR ------------
const BARel = document.querySelector(".menu-bar");
const navel = document.querySelector(".navbar");
//SLIDE--------
const slides = document.querySelectorAll(".projects");
const prevBtn = document.querySelector(".leftI");
const nextBtn = document.querySelector(".rightI");
let slideIndex = 0; // take a index number

BARel.addEventListener("click", () => {
  navel.classList.toggle("slide"); // SLIDE TOGGLE MEANS SLIDE COME AND GOSE ON SAME BUTTTON
  BARel.classList.toggle("wcolor"); // COLOR WHITE CLICK THE BUTTTON
});
// ADD ACTIVE OR REMOVE ACTIVE
function showSlide(index) {
  slides.forEach((slide) => {
    //USING FOR EACH LOOP *** FRIST REMOVE THE ACTIVE
    slide.classList.remove("active");
    slide.classList.remove("scale"); // REMOVE SCALE
  });
  slides[index].classList.add("active");
  slides[index].classList.add("scale"); // ACTIVE SCALE **NEED EXTRA DIV NOT WORKING ON SAME DIV
}

// THIS FUNCTION BACKWARD THE SLIDE
function prevSlide() {
  slideIndex--; //DERECMENT
  if (slideIndex < 0) {
    // IF INDEX NUMBER LESS THEN 0
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex); // CALL THE FUNCTION
  // console.log(slideIndex);
}
// THIS FUNCTION FORWARD THE SLIDE
function nextSlide() {
  slideIndex++; // INCREMENT
  if (slideIndex >= slides.length) {
    // IF INDEX NUMBER  EQUAL TO TOTAL NUMBER OF SLIDE
    slideIndex = 0;
  }
  showSlide(slideIndex);
}
// ABOVE FUNCTION ARE CALL IF CLICK THISE BUTTON
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(() => {
  // CALL THIS FUNTION BY TIME USE SEINTERVAL
  nextSlide();
}, 6000);
