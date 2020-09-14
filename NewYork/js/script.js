window.onscroll = function () { 
    var myNav = document.querySelector(".navbar-bar");
    if (window.scrollY > 50 ) {
        myNav.classList.add("navbar-other");
        myNav.classList.remove("navbar-top");
    } 
    else {
        myNav.classList.add("navbar-top");
        myNav.classList.remove("navbar-other");
    }
};

const menuToggler = document.querySelector(".menu-toggler");
const navMenu = document.querySelector(".navbar-right");

menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });