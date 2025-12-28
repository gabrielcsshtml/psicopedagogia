// ===============================
// SCROLL ANIMATIONS (REVEAL)
// ===============================

const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  }
);

animatedElements.forEach(el => observer.observe(el));


// ===============================
// MENU ATIVO POR SCROLL
// ===============================

const sections = document.querySelectorAll('section, main');
const menuLinks = document.querySelectorAll('.menu a');

function activateMenuOnScroll() {
  let scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (!id) return;

    if (scrollPosition >= top && scrollPosition < top + height) {
      menuLinks.forEach(link => {
        link.classList.remove('primary');
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('primary');
        }
      });
    }
  });
}

window.addEventListener('scroll', activateMenuOnScroll);


// ===============================
// SUAVIZAR CLIQUE EM LINKS INTERNOS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
