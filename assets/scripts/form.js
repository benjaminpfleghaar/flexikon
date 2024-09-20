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

	// Prepare data
	data.code_language = "CSS";
	data.code = data.code.split("\n");
	data.tags = data.tags.split(",");

	// Add loading indicator
	document.querySelector('[data-js="submit-button"]').innerHTML = '<span class="form__spinner"></span>Loading...';

	// Disable all buttons
	document.querySelectorAll("button").forEach((button) => {
		button.disabled = true;
	});

	setTimeout(() => {
		// Remove empty class
		card.classList.remove("card--empty");

		// Create card with content (card object, question object, new card y/n)
		createCard(card, data, true);

		// Remove loading indicator
		document.querySelector('[data-js="submit-button"]').innerHTML = "Save question";

		// Enable all buttons
		document.querySelectorAll("button").forEach((button) => {
			button.disabled = false;
		});

		// Scroll card into view
		window.scrollTo({
			behavior: "smooth",
			top: card.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 24,
		});
	}, 3000);
});

// Count characters
document.querySelectorAll("textarea").forEach((element) => {
	element.addEventListener("input", (event) => {
		// Select counter and calculate characters
		const counter = document.querySelector(`[data-js="${event.target.id}__counter"]`);
		counter.textContent = `${150 - event.target.value.length} characters left`;
	});
});

// Reset form
const resetButton = document.querySelector("[data-js=reset-button]");

resetButton.addEventListener("click", () => {
	// Reset form
	form.reset();

	// Reset character counter
	document.querySelectorAll(".form__counter").forEach((counter) => {
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
