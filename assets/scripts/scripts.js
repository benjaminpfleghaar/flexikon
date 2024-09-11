const card = document.querySelector('[data-js="card"]');
const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');

card &&
	card.addEventListener("click", () => {
		question.classList.toggle("question--hide");
		answer.classList.toggle("answer--hide");
	});
