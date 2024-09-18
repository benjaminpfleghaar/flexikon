// Create card
export const createCard = (card, question, answer, description, code_language, code, tags) => {
	// Check if parent is bookmarks.html
	let path = window.location.pathname;
	let page = path.split("/").pop();
	const isParentBookmarkPage = page === "bookmarks.html" ? "card__bookmark-button--active" : "";

	// Create code block
	let codeBlock = "";
	for (let i = 0; i < code.length; i++) {
		if (i === 0 || i === code.length - 1) {
			codeBlock += `<span>${code[i]}</span>`;
		} else {
			codeBlock += `<span class="card__code-line--offset">${code[i]}</span>`;
		}
	}

	// Create tag list
	let tagItems = "";
	for (let i = 0; i < tags.length; i++) {
		tagItems += `<li class="card__tag">${tags[i]}</li>`;
	}

	// Set inner HTML of card
	card.innerHTML = `
		<aside class="card--highlight" aria-hidden="true"></aside>
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
					${codeBlock}
				</code>
			</section>
		</section>
		<footer class="card__footer">
			<ul class="card__tags-list">
				${tagItems}
			</ul>
			<button
				type="button"
				class="card__bookmark-button ${isParentBookmarkPage}"
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
	card.addEventListener("click", () => {
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
