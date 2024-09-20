// Import
import questions from "./questions.js";
import { createCard } from "./utils.js";

// Store questions
let questionsToRender = questions;

// Select main container
const main = document.querySelector('[data-js="main"]');

// Check if parent is bookmarks.html
let path = window.location.pathname;
let page = path.split("/").pop();
if (page === "bookmarks.html") {
	questionsToRender = questions.filter((item) => item.bookmark);
}

// Create cards
for (const question of questionsToRender) {
	// Create card container and apply attributes
	const card = document.createElement("article");
	card.classList.add("card");
	card.setAttribute("tabindex", "0");
	card.setAttribute("data-js", "card");

	// Create card with content (card object, question object, new card y/n)
	createCard(card, question, false);

	// Append card to main container
	main.append(card);
}
