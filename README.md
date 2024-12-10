# Landing Page Project

## Project Description

This project transforms a static landing page into an interactive, dynamic web experience using JavaScript. The landing page includes a dynamically built navigation bar, smooth scrolling to sections, and active section highlighting as the user scrolls through the page.

The goal of the project is to demonstrate manipulation of the DOM (Document Object Model), dynamic content creation, and responsive design principles.

---

## Features 🧩

1. **Dynamic Navigation Bar**  
   - The navigation menu is dynamically generated based on the number of sections on the page.
   - Clicking a navigation link smoothly scrolls to the respective section.

2. **Active Section Highlighting**  
   - As you scroll through the page, the section currently in the viewport is highlighted.  
   - The corresponding navigation link also updates to show the active state.

3. **Smooth Scrolling**  
   - Clicking on a navigation link scrolls smoothly to the target section, enhancing the user experience.

4. **Responsive Design**  
   - The page layout and navigation bar adjust to various screen sizes for desktop, tablet, and mobile devices.

5. **Collapsible Sections** *(Optional Enhancement)*  
   - Each section can be made collapsible for better usability.

6. **Scroll-to-Top Button** *(Optional Enhancement)*  
   - A button appears when scrolling down, allowing users to quickly return to the top of the page for better navigation.

---

## Technologies Used

- **HTML5**: Structure of the landing page.  
- **CSS3**: Styling for responsive layout and active states.  
- **JavaScript**: Dynamic navigation generation, scrolling effects, and DOM manipulation.  

---

## Installation 📥

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
Clone this repository to your local machine using Git:

```bash
git clone https://github.com/Amjad-Hamidi/landing-page-project-udacity.git
```
### 2. Navigate to the Project Directory
Move into the project folder:

```bash
cd landing-page-project-udacity
```
### 3. Open the Project
Open the index.html file in any modern web browser:

On Windows: Double-click the index.html file.
On macOS/Linux: Use a browser like Chrome, Firefox, or Edge, and drag-and-drop the index.html file into the browser window.
Alternatively, run this command to open the file directly:

```bash
open index.html
```
## Usage Instructions 🚀
### 1. Scroll through the Page
The navigation menu highlights the current active section as you scroll.
Active sections will also have distinct styles applied for better visibility.

### 2. Click on Navigation Links
Clicking on a navigation link will smoothly scroll to the respective section.

### 3. Scroll-to-Top Button
A button appears when scrolling down. Click the button to scroll back to the top smoothly.

## Code Overview
### 1. Dynamic Navigation Menu
The navigation menu is built dynamically based on the sections' data-nav attributes.

**JavaScript:**
```
// Build the navigation menu dynamically
sections.forEach((section) => {
    const sectionID = section.id;
    const sectionName = section.dataset.nav;

    // Create list item and anchor link
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    // Set link attributes
    link.href = `#${sectionID}`;
    link.textContent = sectionName;
    link.classList.add('menu__link');

    // Append link to list item and list item to navbar
    listItem.appendChild(link);
    navBarList.appendChild(listItem);

    // Add smooth scrolling behavior
    link.addEventListener('click', (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
```
### 2. Active Section Detection
The getBoundingClientRect() method identifies which section is currently in the viewport.

**JavaScript:**
```javascript
// Check if a section is in the viewport
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top < 300;
}
```
### 3. Scroll-to-Top Button
A button is displayed after scrolling 300px, and smooth scrolling is triggered to return to the top.

**JavaScript:**
```javascript
const scrollTopButton = document.getElementById('scrollToTop');

// Display the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll smoothly to the top when the button is clicked
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
```
## File Structure 📁
The project files are organized as follows:

```bash
landing-page-project-udacity/
│
├── css/
│   └── styles.css        # Styles for the page
│
├── js/
│   └── app.js            # JavaScript functionality
│
├── index.html            # Main HTML file
└── README.md             # Project documentation
```
## How It Works
### 1. On Page Load
JavaScript dynamically builds the navigation menu based on existing sections.
### 2. While Scrolling
The active section and its corresponding navigation link are highlighted using the isInViewport function.
### 3. On Navigation Link Click
Smooth scrolling is implemented using scrollIntoView.
### 4. Scroll-to-Top Button
A button appears when scrolling 300px down and allows smooth scrolling to the top when clicked.
## Contributing 👨‍💻
Contributions are welcome to improve this project! Follow these steps:

### 1. Fork the repository.
### 2. Create a new branch:
```bash
git checkout -b feature-name
```
### 3. Commit your changes:
```bash
git commit -m "Add feature: description of feature"
```
### 4. Push the branch to your forked repository:
```bash
git push origin feature-name
```
### 5. Open a Pull Request with a detailed description of your changes.
## License 📜
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments 🎓
This project was developed as part of the Udacity Front-End Developer Nanodegree Program. Special thanks to Udacity for providing the resources and guidance.
