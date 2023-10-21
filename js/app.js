/**
 * Define Global Variables
 *
 */
const menuItems = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const navBarLinks = document.querySelectorAll(".navbar__menu a");
const listPageSections = [...document.querySelectorAll("section")];
let navBarListItems = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const view = (pos) => {
    let sectionPos = pos.getBoundingClientRect();
    return sectionPos.top <= 150 && sectionPos.bottom >= 150;
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
const buildNavBar = () => {
    sections.forEach((listPageSection) => {
        let navBarItem = document.createElement("li");
        let navBarSectionId = listPageSection.getAttribute("id");
        let sectionData = listPageSection.getAttribute("data-nav");
        let navLink = document.createElement("a");
        navLink.className = "menu__link";
        let itemName = `${sectionData}`;
        let itemLink = `#${navBarSectionId}`;
        navLink.append(itemName);
        navLink.dataset.nav = navBarSectionId;
        navLink.href = itemLink;
        navBarItem.append(navLink);
        menuItems.append(navBarItem);
    });
};
buildNavBar();

// Add class 'active'
const activeSection = () => {
    sections.forEach((PageSection) => {
        const activeSectionLink = menuItems.querySelector(
            `[data-nav=${PageSection.id}]`
        );

        if (view(PageSection)) {
            PageSection.classList.add("your-active-class");
            activeSectionLink.classList.add("active-section");
        } else {
            PageSection.classList.remove("your-active-class");
            activeSectionLink.classList.remove("active-section");
        }
    });
};

document.addEventListener("scroll", activeSection);

// Scroll to anchor ID using scrollTO event
// Select class
const scroll = () => {
    const menuClass = document.querySelectorAll(".menu__link");
    menuClass.forEach((id) => {
        id.addEventListener("click", (scroll) => {
            scroll.preventDefault();
            const anchorId = document.querySelector(id.getAttribute("href"));
            anchorId.scrollIntoView({ behavior: "smooth" });
        });
    });
};

// Smooth scrolling 
function scrollSection(index) {
    sections.scrollIntoView({ block: 'end', behavior: 'smooth' })
}

