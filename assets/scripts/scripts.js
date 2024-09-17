// Get all cards
const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
	// Find the elements within the card
	const questionSection = card.querySelector('[data-js="question"]');
	const answerSection = card.querySelector('[data-js="answer"]');
	const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

	// Add click event listener to the question section
	card.addEventListener("click", () => {
		// Toggle the visibility of question and answer
		questionSection.classList.toggle("card__question--hidden");
		answerSection.classList.toggle("card__answer--hidden");

		// Toggle the `hidden` attribute for better accessibility
		if (answerSection.hasAttribute("hidden")) {
			answerSection.removeAttribute("hidden");
			questionSection.setAttribute("hidden", "");
		} else {
			answerSection.setAttribute("hidden", "");
			questionSection.removeAttribute("hidden");
		}
	});

	// Toggle bookmark status
	bookmarkButton.addEventListener("click", (event) => {
		// Prevent the click event from bubbling up to the card
		event.stopPropagation();

		// Toggle the bookmark button's active state
		bookmarkButton.classList.toggle("card__bookmark-button--active");
	});
});

// Get dialog, button and body
const dialog = document.querySelector('[data-js="dialog"]');
const addButton = document.querySelector('[data-js="add-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const body = document.querySelector("body");

// Open dialog
addButton.addEventListener("click", () => {
	body.style.overflow = "hidden";
	dialog.showModal();
});

// Close dialog
dialog.addEventListener("click", (event) => {
	if (event.target === dialog) {
		dialog.close();
	}
});
cancelButton.addEventListener("click", (event) => {
	dialog.close();
});

// Listen to dialog state
dialog.addEventListener("close", () => {
	body.removeAttribute("style");
});
