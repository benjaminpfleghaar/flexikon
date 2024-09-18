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

	// Add loading indicator
	document.querySelector('[data-js="submit-button"]').innerHTML =
		'<span class="new-question__spinner"></span>Save question';

	// Disable all buttons
	[...document.getElementsByTagName("button")].forEach((button) => {
		button.disabled = true;
	});

	setTimeout(() => {
		// Remove empty class
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

		// Remove loading indicator
		document.querySelector('[data-js="submit-button"]').innerHTML = "Save question";

		// Enable all buttons
		[...document.getElementsByTagName("button")].forEach((button) => {
			button.disabled = false;
		});
	}, 3000);
});

// Count characters
[...document.getElementsByTagName("textarea")].forEach((element) => {
	element.addEventListener("input", (event) => {
		// Select counter and calculate characters
		const counter = document.querySelector(`[data-js="${event.target.id}__counter"]`);
		counter.innerHTML = `${150 - event.target.value.length} characters left`;
	});
});

// Reset form
const resetButton = document.querySelector("[data-js=reset-button]");

resetButton.addEventListener("click", () => {
	// Reset form
	form.reset();

	// Reset character counter
	[...document.getElementsByClassName("new-question__counter")].forEach((counter) => {
		counter.innerHTML = "150 characters left";
	});

	// Add empty class
	card.classList.add("card--empty");

	// Reset card content
	card.innerHTML = `
		<img src="assets/images/main/empty-card.png" alt="This card is empty" width="179" height="200" />
		<h3 class="card__title card__title--empty">
			This card is empty<small class="card__title--small">Start writing a question</small>
		</h3>
	`;
});
