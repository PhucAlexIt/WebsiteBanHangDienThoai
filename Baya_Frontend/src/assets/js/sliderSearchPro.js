const slides = document.querySelector('.slides_search');
const slideCount = document.querySelectorAll('.slide_search').length;
let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 50}%)`;
  currentIndex = index;
}

setInterval(() => {
    currentIndex = ++currentIndex;
    if(currentIndex==3){
      currentIndex=0;
    }
    goToSlide(currentIndex);
  }, 3000);
