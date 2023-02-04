$(document).ready(function(){

  //hamburger Toggle
  $('.humbarger').click(function(event){
  $('.menu-list').slideToggle(500);
  event.preventDefault();
  
  $('.menu-list li a').click(function(event) {
      if ($(window).width() < 768) {
        $('.menu-list').slideUp(500);
        event.preventDefault(); 
      }
    });
});

});

const slideContainer = document.querySelector("#slideContainer");
const slides = document.querySelectorAll("#slide img");

// Current slide
let currentSlide = 0;

// Show initial slide
slides[currentSlide].style.opacity = 1;

// Change slide every 2 seconds
setInterval(changeSlide, 2000);

function changeSlide() {
  // Fade out current slide
  slides[currentSlide].style.opacity = 0;

  // Change current slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Fade in new slide
  slides[currentSlide].style.opacity = 1;
}