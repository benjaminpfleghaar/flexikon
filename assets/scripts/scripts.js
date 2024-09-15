const cards = document.querySelectorAll('[data-js="card"]');

[...cards].forEach((card, index) => {
	const question = cards[index].querySelector('[data-js="question"]');
	const answer = cards[index].querySelector('[data-js="answer"]');
	const button = cards[index].querySelector('[data-js="button"]');

	card.addEventListener("click", (e) => {
		if (e.target !== button) {
			question.classList.toggle("card__question--hidden");
			answer.classList.toggle("card__answer--hidden");
		}
	});

	button.addEventListener("click", () => {
		button.classList.toggle("card__bookmark-button--active");
	});
});
