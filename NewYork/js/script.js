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
