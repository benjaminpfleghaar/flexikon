// import Header from "../components/Header/Header.js";
// import Footer from "../components/Footer/Footer.js";
// import CardList from "../components/CardList/CardList.js";

// // Append components
// document.body.append(Header("Home"), CardList(false), Footer("Home"));

import App from "./assets/components/App/App.js";

// Render app
function render() {
	document.body.append(App());
}

render();

// Handle navigation
const views = document.querySelectorAll('[data-js*="main"]');
const links = document.querySelectorAll('[data-js*="link"]');

links.forEach((link) => {
	link.addEventListener("click", (event) => {
		views.forEach((view) => {
			view.classList.add("main--hidden");
			view.setAttribute("hidden", "");
		});
		const hrefAttribute = event.target.getAttribute("href");
		const currentView = document.querySelector(hrefAttribute);
		currentView.classList.remove("main--hidden");
		currentView.removeAttribute("hidden");
	});
});
