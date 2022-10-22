/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/*
 * ----------------------------------------------------
 *
 *   Thanks for your FeedBack.
 *   I Wish to meet your Expectations.
 *   Thanks for your time.
 *   Waiting your Approval.
 *
 * ----------------------------------------------------

/**
    REferences:
        Udacity NanoDegree Professional Course
        https://developer.mozilla.org/en-US/docs/Web/JavaScript
        https://www.w3schools.com/js/default.asp
        https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv ** Osama El-Zero **

*/
/**
 * Define Global Variables
 * 
*/

// Declare Navigation Bar 
const navbar__List = document.getElementById("navbar__list");
// Declare section
const section = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// NavBar Biulding Function
function buildNavBar() {
    // For Loop through Sections
    for (var i = 0; i < section.length; i++) {
        // Declare and Create "li" element
        const listLi = document.createElement('li');
        // Declare and Create "a" element
        const anchor = document.createElement('a');
        // Declare and Set "Section Name" Attrebute of "a" element
        let sectionName = section[i].getAttribute('data-nav');
        // Declare and Set "Section ID" Attrebute of "a" element
        let IdofSection = sectionName.replace(/\s/g, '').toLowerCase();
        // Declare and Set "href" Attrebute of "a" element
        anchor.setAttribute('href', "#" + IdofSection);
        // Declare and Set "class" Attrebute of "a" element to get Styles from "style.css" file
        anchor.setAttribute('class', 'menu__link');
        // Declare and Set "text" Attrebute of "a" element
        anchor.innerText = sectionName;
        // Append "a" element to "li" element
        listLi.appendChild(anchor);
        // Append "li" element element to Navigation Bar 
        navbar__List.appendChild(listLi);
    }
}
// Starting the Function to work
buildNavBar();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Setting Active State to Section in Viewport 
// Declare offset of Section 
const offset = (section) => {
    // Return value Using floor Function.
    return Math.floor(section.getBoundingClientRect().top);
};

// Declare a function to Remove "your-active-class" from classList.
const clearActiveClass = (section) => {
    // Assign "Section" to Remove "your-active-class" from classList.
    section.classList.remove('your-active-class');
    // ReAssign background Style of the specified "Section".
    section.style.backgroundColor = "linear-gradient(0deg,rgba(136, 203, 171, 1) 0%,rgba(0, 13, 60, 1) 100%";
};
// Declare a function to Add "your-active-class" to classList.
const addActiveClass = (conditional, section) => {
    // Conditional if to check the Section's active state.
    if (conditional) {
        // Assign "Section" to Add "your-active-class" to classList.
        section.classList.add('your-active-class');
        // ReAssign background Style of the specified "Section".
        section.style.backgroundColor = "linear-gradient(0deg,rgba(136, 203, 171, 1) 0%,rgba(0, 13, 60, 1) 100%";
    };
};

// Declare a function to Activate the specified section.
const activeSection = () => {
    // Using forEach Loop to iterate through Setions.
    section.forEach(section => {
        // Declare "offset"  to Active Section. 
        const elementOffset = offset(section);
        // Assigh "inviewport".
        inviewport = () => elementOffset < 200 && elementOffset >= -200;
        // Run the "clearActiveClass" function.
        clearActiveClass(section);
        // Run the "addActiveClass" function.
        addActiveClass(inviewport(), section);
    });
};
// Declare "addEventListener" to check window scroll to run the 
window.addEventListener('scroll', activeSection);

// End Setting Active State 


// Declare a function to scroll to top Using "Top" Button.
function topFunction() {
    // scroll to the top of the document.
    document.documentElement.scrollTop = 0;
}


