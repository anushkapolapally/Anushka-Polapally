/* ---------- Slideshow Logic ---------- */
let currentSlide = 0;
let slides;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");

  // Only start slideshow if there are slides on this page
  if (slides.length > 0) {
    slides[currentSlide].classList.add("active");
    slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
  }
});

function showSlide(n) {
  if (!slides || slides.length === 0) return;

  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
}

/* ---------- Smooth Scroll to Top for Navigation ---------- */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Optional Helper for Future Features ---------- */
// Example: highlight active nav link or handle dynamic page effects
// (Safe placeholder if you decide to add transitions or load animations)
