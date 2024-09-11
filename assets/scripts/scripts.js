const cards = document.querySelectorAll('[data-js="card"]');

[...cards].forEach((card, index) => {
	const question = cards[index].querySelector('[data-js="question"]');
	const answer = cards[index].querySelector('[data-js="answer"]');
	const questionButton = question.querySelector(
		'[data-js="question__button"]'
	);
	const answerButton = answer.querySelector('[data-js="answer__button"]');

	card.addEventListener("click", (e) => {
		if (e.target !== questionButton && e.target !== answerButton) {
			question.classList.toggle("question--hide");
			answer.classList.toggle("answer--hide");
		}
	});

	questionButton.addEventListener("click", () => {
		questionButton.classList.toggle("question__button--active");
	});

	answerButton.addEventListener("click", () => {
		answerButton.classList.toggle("answer__button--active");
	});
});
