// Import
import questions from "./questions.js";
import { createCard } from "./utils.js";

// Select parent
const main = document.querySelector('[data-js="main"]');

for (let i = 0; i < questions.length; i++) {
	// Create card container and apply attributes
	const card = document.createElement("article");
	card.setAttribute("class", "card");
	card.setAttribute("tabindex", "0");
	card.setAttribute("data-js", "card");

	// Fill card with content
	createCard(
		card,
		questions[i].question,
		questions[i].answer,
		questions[i].description,
		questions[i].code_language,
		questions[i].code,
		questions[i].tags,
		false
	);

	// Append card to main container
	main.append(card);
}
