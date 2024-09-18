// Import
import questions from "./questions.js";
import { createCard } from "./utils.js";

// Select main container
const main = document.querySelector('[data-js="main"]');

// Create cards
questions.forEach((item) => {
	// Check if parent is bookmarks.html
	let path = window.location.pathname;
	let page = path.split("/").pop();
	const isParentBookmarkPage = page === "bookmarks.html" ? true : false;

	// Create card container and apply attributes
	const card = document.createElement("article");
	card.setAttribute("class", "card");
	card.setAttribute("tabindex", "0");
	card.setAttribute("data-js", "card");

	// Fill card with content
	// (card element, question, answer, description, code language, code, tags, new card)
	createCard(
		card,
		item.question,
		item.answer,
		item.description,
		item.code_language,
		item.code,
		item.tags,
		item.bookmark,
		false
	);

	if (!item.bookmark) {
		if (!isParentBookmarkPage) {
			// Append all cards to main container
			main.append(card);
		}
	} else {
		// Append only bookmarked cards to main container
		main.append(card);
	}
});
