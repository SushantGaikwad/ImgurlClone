let navbar = document.getElementById("navbar");
let tags = document.getElementById("tags");
let back_div = document.getElementById("back-div");
let grid = document.getElementById("grid-container");

window.onscroll = function () {

	if (window.scrollY > 20) {
		grid.style.top = "-20px";
	} else if (window.scrollY > 60) {
		grid.style.top = "-10px";
	} else if (window.scrollY > 100) {
		grid.style.top = "50px";
	} else if (window.scrollY == 0) {
		grid.style.top = "-50px";
	}

	if (window.pageYOffset >= tags.offsetHeight) {
		navbar.classList.add("sticky");
		tags.classList.add("tags-after");
	} else {
		navbar.classList.remove("sticky");
		tags.classList.remove("tags-after");
	}

	if (window.pageYOffset >= back_div.offsetHeight) {
		navbar.classList.add("newNav");
	} else {
		navbar.classList.remove("newNav");
	}
};
