document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.slide');
  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');

  let currentIndex = 0;
  const itemsToShow = 5;
  const totalItems = carousel.children.length;
  const itemWidth = 264;

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex += itemsToShow;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= itemsToShow;
    } else {
      currentIndex = totalItems - itemsToShow;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const newTransformValue = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${newTransformValue}px)`;
  }
});

document.querySelector(".search-box").addEventListener('submit', function (event) {
  event.preventDefault()
  const a = document.createElement("a")
  a.href = "/searchResult.html"
  a.click()
})
