export default function EmptyCard() {
	// Create card container and apply attributes
	const emptyCard = document.createElement("article");
	emptyCard.classList.add("empty-card");
	emptyCard.setAttribute("tabindex", "0");
	emptyCard.setAttribute("data-js", "card");

	// Set inner HTML of empty card
	emptyCard.innerHTML = `
		<article class="empty-card" tabindex="0" data-js="card">
			<img src="assets/components/EmptyCard/images/empty-card.png" alt="This card is empty" width="179" height="200" />
			<h3 class="empty-card__title">
				This card is empty<small class="empty-card__title--small">Start writing a question</small>
			</h3>
		</article>
	`;

	return emptyCard;
}
