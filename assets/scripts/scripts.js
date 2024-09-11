const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');
const questionButton = document.querySelector('[data-js="question__button"]');
const answerButton = document.querySelector('[data-js="answer__button"]');

question &&
	question.addEventListener("click", (e) => {
		if (e.target !== questionButton) {
			question.classList.add("question--hide");
			answer.classList.remove("answer--hide");
		}
	});

answer &&
	answer.addEventListener("click", (e) => {
		if (e.target !== answerButton) {
			question.classList.remove("question--hide");
			answer.classList.add("answer--hide");
		}
	});

questionButton &&
	questionButton.addEventListener("click", () => {
		questionButton.classList.toggle("question__button--active");
	});

answerButton &&
	answerButton.addEventListener("click", () => {
		answerButton.classList.toggle("answer__button--active");
	});
