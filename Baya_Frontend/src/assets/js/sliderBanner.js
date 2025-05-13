const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

setInterval(() => {
  currentIndex = ++currentIndex;
  if (currentIndex == 3) {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}, 3000);
