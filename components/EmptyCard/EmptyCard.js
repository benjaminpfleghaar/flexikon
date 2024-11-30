export default function EmptyCard() {
	// Create card container and apply attributes
	const emptyCard = document.createElement("article");
	emptyCard.classList.add("empty-card");
	emptyCard.setAttribute("data-js", "card");

	// Set inner HTML of empty card
	emptyCard.innerHTML = `
			<img src="components/EmptyCard/images/empty-card.png" alt="This card is empty" width="200" height="200" />
			<h3 class="empty-card__title">This card is empty<small class="empty-card__title--small">Start writing a question</small></h3>
	`;

	return emptyCard;
}
