import { questions } from "./../../scripts/lib/data.js";
import Card from "../Card/Card.js";

export default function CardList(bookmarked) {
	// Create container
	const cardList = document.createElement("main");
	cardList.setAttribute("data-js", "main");

	// Filter cards based in page
	const filteredQuestions = bookmarked ? questions.filter((question) => question.bookmark) : questions;

	// Create cards
	filteredQuestions.forEach((question) => {
		cardList.append(Card(question, false));
	});

	return cardList;
}
