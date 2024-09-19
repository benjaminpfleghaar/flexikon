// Create card
export const createCard = (card, question, answer, description, code_language, code, tags, isBookmarked, isNew) => {
	// Check if card is new
	const highlightCard = isNew ? '<aside class="card--highlight" aria-hidden="true"></aside>' : "";

	// Create code block
	let codeLines = "";
	for (let i = 0; i < code.length; i++) {
		if (i === 0 || i === code.length - 1) {
			codeLines += `<span>${code[i]}</span>`;
		} else {
			codeLines += `<span class="card__code-line--offset">${code[i]}</span>`;
		}
	}

	// Create tag list
	let tagItems = "";
	for (const tag of tags) {
		tagItems += `<li class="card__tag">${tag}</li>`;
	}

	// Check if item is bookmarked
	const isParentBookmarkedClass = isBookmarked ? "card__bookmark-button--active" : "";

	// Set inner HTML of card
	card.innerHTML = `
		${highlightCard}
		<section class="card__question" data-js="question">
			<h2 class="card__title">${question}</h2>
		</section>
		<section class="card__answer card__answer--hidden" data-js="answer" hidden>
			<h2 class="card__title">${answer}</h2>
			<p class="card__description">
				${description}
			</p>
			<section class="card__code-block">
				<small class="card__code-language">${code_language}</small>
				<code class="card__code">
					${codeLines}
				</code>
			</section>
		</section>
		<footer class="card__footer">
			<ul class="card__tags-list">
				${tagItems}
			</ul>
			<button
				type="button"
				class="card__bookmark-button ${isParentBookmarkedClass}"
				aria-label="Bookmark this question"
				data-js="bookmark-button">
				<span class="card__bookmark-button-text--hidden">Bookmark</span>
			</button>
		</footer>
	`;

	// Find elements within the card
	const questionSection = card.querySelector('[data-js="question"]');
	const answerSection = card.querySelector('[data-js="answer"]');
	const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

	// Add click event listener to question section
	card.addEventListener("click", (event) => {
		// Reset flipped cards
		if (!questionSection.hasAttribute("hidden")) {
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
		questionSection.classList.toggle("card__question--hidden");
		answerSection.classList.toggle("card__answer--hidden");

		// Toggle `hidden` attribute for better accessibility
		if (answerSection.hasAttribute("hidden")) {
			answerSection.removeAttribute("hidden");
			questionSection.setAttribute("hidden", "");
		} else {
			answerSection.setAttribute("hidden", "");
			questionSection.removeAttribute("hidden");
		}
	});

	// Toggle bookmark status
	bookmarkButton.addEventListener("click", (event) => {
		// Prevent click event from bubbling up to the card
		event.stopPropagation();

		// Toggle bookmark button's active state
		bookmarkButton.classList.toggle("card__bookmark-button--active");
	});
};
