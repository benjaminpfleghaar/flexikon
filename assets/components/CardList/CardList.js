import { questions } from "./../../scripts/lib/data.js";
import Card from "../Card/Card.js";

export default function CardList(bookmarked) {
	// Create container
	const cardList = document.createElement("main");
	cardList.setAttribute("data-js", "main");

	// Create cards
	let filteredQuestions = bookmarked ? questions.filter((entry) => entry.bookmark) : questions;
	filteredQuestions.forEach((question) => {
		cardList.append(Card(question, false));
	});

	return cardList;
}
