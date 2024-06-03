const nextBtn = document.querySelector('.next-btn');
const slide = document.querySelector('.slide');

nextBtn.addEventListener('click', next);
function next(event) {
  console.log(event.target);
  slide.style.transform = 'translateX(-800px)';
}