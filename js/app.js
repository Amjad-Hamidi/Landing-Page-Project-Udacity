// Select the navigation menu and sections
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the navigation bar dynamically
sections.forEach(section => {
  const navItem = document.createElement('li');
  navItem.innerHTML = `
    <a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>
  `;
  navBar.appendChild(navItem);
});

// Function to set active section and corresponding nav link when scrolling
const setActiveSection = () => {
    let activeSection = null;
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
  
      // Check if the section is at least 60% within the viewport
      if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.6) { 
        activeSection = section;
      }
    });
  
    sections.forEach(section => {
      const navLink = document.querySelector(`a[href="#${section.id}"]`);
  
      if (section === activeSection) {
        section.classList.add('your-active-class');
        section.style.backgroundColor = '#020005';
        navLink.classList.add('active-link');
      } else {
        section.classList.remove('your-active-class');
        section.style.backgroundColor = 'transparent'; // Reset background color
        navLink.classList.remove('active-link');
      }
    });
  };
  
// Smooth scrolling behavior for navbar links
navBar.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('menu__link')) {
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Event listener for scroll to detect active section
document.addEventListener('scroll', setActiveSection);

// Initial activation on page load
setActiveSection();

// Scroll to top button behavior
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});
