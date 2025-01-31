let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const width = images[0].clientWidth;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${-currentIndex * width}px)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

setInterval(autoSlide, 3000);