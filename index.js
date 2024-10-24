const carousel = document.querySelector('.carousel');
const carousel2 = document.querySelector('.carousel2');
let index = 0;
let index2 = 0;

function showNextSlide() {
  index = (index + 1) % 3;
  index2 = (index2 + 1) % 3;
  carousel.style.transform = `translateX(${-index * 100}%)`;
  carousel2.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextSlide, 2000);



document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".fade-in-left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add("visible");
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(target);
});


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".benefit-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
});
