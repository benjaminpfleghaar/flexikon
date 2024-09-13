const cards = document.querySelectorAll('[data-js="card"]');

[...cards].forEach((card, index) => {
	const question = cards[index].querySelector('[data-js="question"]');
	const answer = cards[index].querySelector('[data-js="answer"]');
	const button = question.querySelector('[data-js="question__button"]');

	card.addEventListener("click", (e) => {
		if (e.target !== button) {
			question.classList.toggle("question--hide");
			answer.classList.toggle("answer--hide");
		}
	});

	button.addEventListener("click", () => {
		button.classList.toggle("question__button--active");
	});
});
