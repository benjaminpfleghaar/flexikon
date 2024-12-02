import { questions } from "../../data/questions.js";
import Card from "../Card/Card.js";

export default function CardList(showOnlyBookmarksCards) {
	// Create container
	const cardList = document.createElement("main");
	cardList.setAttribute("data-js", "main");

	// Filter cards
	const filteredQuestions = showOnlyBookmarksCards ? questions.filter((question) => question.bookmark) : questions;

	// Create cards
	filteredQuestions.forEach((question) => {
		cardList.append(Card(question, false));
	});

	return cardList;
}
