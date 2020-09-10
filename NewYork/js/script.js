window.onscroll = function () { 
    var myNav = document.querySelector(".navbar");
    if (window.scrollY > 50 ) {
        myNav.classList.add("navbar-other");
        myNav.classList.remove("navbar-top");
    } 
    else {
        myNav.classList.add("navbar-top");
        myNav.classList.remove("navbar-other");
    }
};