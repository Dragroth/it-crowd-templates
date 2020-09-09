window.onscroll = function () { 
    var myNav = document.querySelector(".navbar");
    if (window.scrollY != 0 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};