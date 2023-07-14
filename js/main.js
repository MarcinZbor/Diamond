const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allNavItems = document.querySelectorAll(".nav__link");

const handleBurger = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("sticky-body");

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			document.body.classList.remove("sticky-body");
		})
	);

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navBtn.classList.remove("is-active");
		})
	);
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

navBtn.addEventListener("click", handleBurger);
