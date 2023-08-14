// <============== Set Current Year ============>

const currentYear = document.querySelector('.year');
const year = new Date().getFullYear();
currentYear.textContent = year;

// <============== Mobile Navigation ============>

const menuBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

menuBtnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// <======== Smooth scrolling by the Javascript ==========>

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');

    // Back to top
    if (href === '#')
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });

    //   Got to clicked section
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //   Hide mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// <=============