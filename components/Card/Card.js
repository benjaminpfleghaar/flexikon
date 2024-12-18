export default function Card(question, addHighlight) {
	// Create card container and apply attributes
	const card = document.createElement("article");
	card.classList.add("card");
	card.setAttribute("tabindex", "0");
	card.setAttribute("data-js", "card");

	// Create code block
	let codeLines = "";
	for (let i = 0; i < question.code.length; i++) {
		if (i === 0 || i === question.code.length - 1) {
			codeLines += `<span>${question.code[i]}</span>`;
		} else {
			codeLines += `<span class="card__code-line--offset">${question.code[i]}</span>`;
		}
	}

	// Create tag list
	let tagItems = "";
	for (const tag of question.tags) {
		tagItems += `<li class="card__tag">${tag}</li>`;
	}

	// Set inner HTML of card
	card.innerHTML = `
		${addHighlight ? '<aside class="card--new" aria-hidden="true"></aside>' : ""}
		<section class="card__question" data-js="question">
			<h2 class="card__title">${question.question}</h2>
		</section>
		<section class="card__answer card__answer--hidden" data-js="answer" hidden>
			<h2 class="card__title">${question.answer}</h2>
			<p class="card__explanation">${question.explanation}</p>
			<section class="card__code-block">
				<small class="card__code-language">${question.code_language}</small>
				<code class="card__code">
					${codeLines}
				</code>
			</section>
		</section>
		<footer class="card__footer">
			<ul class="card__tags-list">
				${tagItems}
			</ul>
			<button type="button" class="card__bookmark-button ${question.bookmark ? "card__bookmark-button--active" : ""}" aria-label="Bookmark this question" data-js="bookmark-button">
				<span class="card__bookmark-button-text--hidden">Bookmark</span>
			</button>
		</footer>
	`;

	// Toggle answer/question
	card.addEventListener("click", () => {
		// Find elements within the card
		const question = card.querySelector('[data-js="question"]');
		const answer = card.querySelector('[data-js="answer"]');

		// Reset flipped cards
		if (!question.hasAttribute("hidden")) {
			document.querySelectorAll('[data-js="question"]').forEach((question) => {
				question.classList.remove("card__question--hidden");
				question.removeAttribute("hidden");
			});
			document.querySelectorAll('[data-js="answer"]').forEach((answer) => {
				answer.classList.add("card__answer--hidden");
				answer.setAttribute("hidden", "");
			});
		}

		// Toggle the visibility of question and answer
		question.classList.toggle("card__question--hidden");
		answer.classList.toggle("card__answer--hidden");

		// Toggle `hidden` attribute for better accessibility
		if (answer.hasAttribute("hidden")) {
			answer.removeAttribute("hidden");
			question.setAttribute("hidden", "");
		} else {
			answer.setAttribute("hidden", "");
			question.removeAttribute("hidden");
		}
	});

	// Toggle bookmark status
	card.querySelector('[data-js="bookmark-button"]').addEventListener("click", (event) => {
		// Prevent click event from bubbling up to the card
		event.stopPropagation();

		// Toggle bookmark button's active state
		event.target.classList.toggle("card__bookmark-button--active");
	});

	return card;
}
