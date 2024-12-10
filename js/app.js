const sections = document.querySelectorAll('section');
const navBarList = document.getElementById('navbar__list');

// Function to check if section is in the viewport
/*indicates how far the section is from the top of the viewport. If the distance from the top of the section to the top of the viewport is 
within the first 300 pixels, the section is considered "in view" or visible.
This value doesn't relate to the size of the element itself, but to its position relative to the viewport.*/
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top < 300;
}

// Function to remove 'active' class from all sections
function removeActiveClasses() {
    sections.forEach((section) => {
        section.classList.remove('your-active-class');
    });
}

// Function to remove 'active' class from all nav links
function removeNavActive() {
    document.querySelectorAll('.menu__link').forEach((link) => {
        link.classList.remove('active-link');
    });
}


// Build the navigation menu dynamically
function buildNavMenu() {
    sections.forEach((section) => {
        // Get section ID for each section
        const sectionID = section.id;
        // Get section name for each section, note: dataset is related to custom attributes (data-***) in index.html , nav: custom attribute in index.html
        const sectionName = section.dataset.nav;
        console.log(sectionName);
        // Create list item and link
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        console.log(link)
        link.href = `#${sectionID}`; // #section1, #section2, #section3, #section4 => that's linked to section that contains the id section, it's identified in index.html
        link.textContent = sectionName; // Section 1, Section 2, Section 3, Section 4
        link.classList.add('menu__link');

        // Add click behavior for smooth scrolling
        link.addEventListener('click', (e) => {
            e.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });

        // Append link to list item and list item to nav
        listItem.appendChild(link); // Append link to li
        navBarList.appendChild(listItem); // Append li to ul
        // console.log(navBarList); ul with inner li that contains a and href
    });
}

// Set the active class on the section in the viewport
/*The process works by checking each section on the page to determine whether it is currently within the viewport, using a function like isInViewport().
 If a section is found to be in the viewport, the code first removes any active classes (your-active-class and active-link) from all sections and navigation links to ensure that only one section and its corresponding nav link can be active at a time.
 Then, the active class is added to the section currently in the viewport and its associated navigation link.
 This ensures the styling and highlighting dynamically reflect the user’s current scroll position, creating a smooth and interactive experience as they navigate through the content.*/
function setActiveSection() { 
    sections.forEach((section) => { // checks for all sections for each scorolling
        if (isInViewport(section)) {
            removeActiveClasses(); 
            removeNavActive();

            // Add 'active' class to section
            section.classList.add('your-active-class');

            // Add 'active' class to nav link
            const navLink = document.querySelector(`a[href="#${section.id}"]`);
            console.log(navLink);
            navLink.classList.add('active-link');
        }
    });
}

// Build the navigation menu on page load
document.addEventListener('DOMContentLoaded', buildNavMenu);

// Add 'active' class to sections while scrolling
document.addEventListener('scroll', setActiveSection);

// Scroll to top button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Top';
scrollTopButton.classList.add('scroll-to-top');

document.body.appendChild(scrollTopButton);

// Show button after scrolling below fold
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll smoothly to top on button click
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});