const slides = document.querySelector('.slides');
const total = slides.children.length;
let index = 0;

setInterval(() => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 5000);
