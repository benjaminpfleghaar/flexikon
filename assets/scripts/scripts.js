const card = document.querySelector('[data-js="card"]');
const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');

const questionButton = document.querySelector('[data-js="question__button"]');
const answerButton = document.querySelector('[data-js="answer__button"]');

question &&
	question.addEventListener("click", (e) => {
		console.log(e.target, question);
		if (e.target === question) {
			question.classList.remove("question--hide");
			answer.classList.add("answer--hide");
		}
	});

answer &&
	answer.addEventListener("click", (e) => {
		console.log(e.target, answer);
		if (e.target === answer) {
			question.classList.add("question--hide");
			answer.classList.remove("answer--hide");
		}
	});

// const questionButton = document.querySelector('[data-js="question__button"]');
// questionButton.addEventListener("click", () => {
// 	questionButton.classList.toggle("question__button--active");
// });

// const answerButton = document.querySelector('[data-js="answer__button"]');
// answerButton.addEventListener("click", () => {
// 	answerButton.classList.toggle("answer__button--active");
// });
