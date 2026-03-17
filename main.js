/**
 * ASYMMETRIX — main.js
 * Nav scroll behaviour, active section highlighting, scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {

  const nav      = document.getElementById('nav');
  const burger   = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // --- Nav shadow on scroll ---
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // --- Mobile burger ---
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // --- Active nav link on scroll ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll(
    '.about-grid, .strategy-header, .logo-grid, .contact-grid, .section-label, .strategies-nav'
  );
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

});
