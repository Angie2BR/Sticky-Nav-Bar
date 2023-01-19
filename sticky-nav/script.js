const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		header.style.padding = "5px 30px";
	} else {
		header.style.padding = "30px 30px";
	}
}

window.onscroll = function () {
	scrollFunction();
};
