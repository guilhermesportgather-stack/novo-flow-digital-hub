/**
 * Novo Flow – Main JS
 */
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var toggle = document.getElementById('nf-mobile-toggle');
  var menu = document.getElementById('nf-mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('active');
      toggle.textContent = isOpen ? '✕' : '☰';
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
        toggle.textContent = '☰';
      });
    });
  }

  // Simple scroll-reveal animation
  var reveals = document.querySelectorAll('.nf-card, .nf-service-card, .nf-highlight-card, .nf-target-card, .nf-diff-item, .nf-stat, .nf-objection-card, .nf-step, .nf-testimonial-card, .nf-final-cta');

  function revealOnScroll() {
    reveals.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }

  // Initial state
  reveals.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
