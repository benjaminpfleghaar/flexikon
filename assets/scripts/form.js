import { createCard } from "./utils.js";

// Get form and card
const form = document.querySelector('[data-js="form"]');
const card = document.querySelector('[data-js="card"]');

// Listen to form
form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Create object from form data
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	// Prepare card
	card.classList.remove("card--empty");

	// Fill card with content
	createCard(
		card,
		data.question,
		data.answer,
		data.explanation,
		"CSS",
		data.code.split("\n"),
		data.tags.split(" "),
		true
	);
});

// Count characters
const inputElements = document.getElementsByTagName("textarea");

[...inputElements].forEach((element) => {
	element.addEventListener("input", (event) => {
		// Select counter and calculate characters
		const counter = document.querySelector(`[data-js="${event.target.id}__counter"]`);
		const characters = 150 - event.target.value.length;
		counter.innerHTML = `${characters} characters left`;
	});
});

// Reset form
const resetButton = document.querySelector("[data-js=reset-button]");

resetButton.addEventListener("click", () => {
	// Reset form
	form.reset();

	// Reset character counter
	const counters = document.getElementsByClassName("new-question__counter");
	[...counters].forEach((counter) => {
		counter.innerHTML = "150 characters left";
	});

	// Add empty class
	card.classList.add("card--empty");

	// Reset card to empty
	card.innerHTML = `
		<img src="assets/images/main/empty-card.png" alt="This card is empty" width="179" height="200" />
		<h3 class="card__title card__title--empty">
			This card is empty<small class="card__title--small">Start writing a question</small>
		</h3>
	`;
});
