// script.js
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.slide');
  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');

  let currentIndex = 0;
  const itemsToShow = 5;
  const totalItems = carousel.children.length;
  const itemWidth = 264; // Width for each item

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex += itemsToShow;
    } else {
      currentIndex = 0; // Reset to the first set of items
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= itemsToShow;
    } else {
      currentIndex = totalItems - itemsToShow; // Jump to the last set of items
    }
    updateCarousel();
  });

  function updateCarousel() {
    const newTransformValue = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${newTransformValue}px)`;
  }
});
