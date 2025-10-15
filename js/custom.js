/* hamburger */

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* Testimonial Slider */

$(document).ready(function () {
  $(".testimonial-card.owl-carousel").owlCarousel({
    loop: true, // Enable looping
    items: 1, // Show one testimonial per row
    dots: false, // Enable dots navigation
    nav: true, // Enable arrows navigation
    margin: 30, // Adjust the space between testimonial items
  });
});
