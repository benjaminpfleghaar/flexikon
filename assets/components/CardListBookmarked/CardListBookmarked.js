import { questions } from "../../scripts/lib/data.js";
import Card from "../Card/Card.js";

export default function CardListBookmarked() {
	// Create container
	const cardListBookmarked = document.createElement("main");
	cardListBookmarked.classList.add("main--hidden");
	cardListBookmarked.setAttribute("id", "bookmarked");
	cardListBookmarked.setAttribute("data-js", "main-bookmarked");

	// Create cards
	questions
		.filter((entry) => entry.bookmark)
		.forEach((question) => {
			cardListBookmarked.append(Card(question, false));
		});

	return cardListBookmarked;
}
