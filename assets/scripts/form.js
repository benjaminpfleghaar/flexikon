import { createCard } from "./utils.js";

// Get form
const form = document.querySelector('[data-js="form"]');

// Listen to form
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Create object from form data
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	// Select card
	const card = document.querySelector('[data-js="card"]');

	// Prepare card
	card.classList.remove("card--empty");

	// Fill card with content
	createCard(card, data.question, data.answer, data.explanation, "CSS", data.code.split("\n"), data.tags.split(" "));
});
