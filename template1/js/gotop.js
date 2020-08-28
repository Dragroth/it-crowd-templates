const back2Top = document.querySelector("#back2Top");
const menu = document.querySelector(".static-image");

addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > menu.clientHeight) {
		back2Top.style.opacity = 1;
		back2Top.style.cursor = "pointer";
	} else {
		back2Top.style.opacity = 0;
		back2Top.style.cursor = "default";
	}
});

back2Top.addEventListener("click", () => {
	if(back2Top.style.opacity != 0) window.scrollTo(0, 0);
});