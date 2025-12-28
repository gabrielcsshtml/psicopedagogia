const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));
