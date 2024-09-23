import Card from "../Card/Card.js";
import EmptyCard from "../EmptyCard/EmptyCard.js";

export default function Form() {
	// Create form and apply attributes
	const form = document.createElement("article");
	form.classList.add("form");

	// Set inner HTML of form
	form.innerHTML = `
		<section class="form__header">
			<h2 class="form__title" id="title">Add question</h2>
			<p class="form__description">Expand the flexicon by adding a new question</p>
		</section>
		<form aria-labelledby="title" data-js="form">
			<fieldset class="form__fieldset" aria-describedby="description-question">
				<legend class="form__legend">Question details</legend>
				<p class="form__fieldset-description" id="description-question">
					Enter the question and some keywords
				</p>
				<section class="form__input-group">
					<label class="form__label" for="question">Question</label>
					<textarea
						id="question"
						class="form__textarea"
						name="question"
						rows="3"
						maxlength="150"
						placeholder="Add your question here"
						required></textarea>
					<small class="form__counter" data-js="question__counter" aria-live="polite"
						>150 characters left</small
					>
				</section>
				<section class="form__input-group">
					<label class="form__label" for="tags">Tags</label>
					<input
						id="tags"
						class="form__input"
						name="tags"
						maxlength="150"
						placeholder="Add a few tags like html, css, ..."
						required />
				</section>
			</fieldset>
			<fieldset class="form__fieldset" aria-describedby="description-answer">
				<legend class="form__legend">Answer details</legend>
				<p class="form__fieldset-description" id="description-answer">
					Enter the answer, a explanation and a code snippet
				</p>
				<section class="form__input-group">
					<label class="form__label" for="answer">Answer</label>
					<input
						id="answer"
						class="form__input"
						name="answer"
						maxlength="150"
						placeholder="Add your answer here"
						required />
				</section>
				<section class="form__input-group">
					<label class="form__label" for="explanation">Explanation</label>
					<textarea
						id="explanation"
						class="form__textarea"
						name="explanation"
						rows="3"
						maxlength="150"
						placeholder="Add a short explanation here"
						required></textarea>
					<small class="form__counter" data-js="explanation__counter" aria-live="polite"
						>150 characters left</small
					>
				</section>
				<section class="form__input-group">
					<label class="form__label" for="code">Code</label>
					<textarea
						id="code"
						class="form__textarea"
						name="code"
						rows="3"
						maxlength="150"
						placeholder="Add your code snippet here"
						required></textarea>
					<small class="form__counter" data-js="code__counter" aria-live="polite"
						>150 characters left</small
					>
				</section>
				<section class="form__radio-group">
					<input
						type="radio"
						id="html"
						class="form__radio"
						value="HTML"
						name="code_language"
						checked />
					<label class="form__label" for="html">HTML</label>
				</section>
				<section class="form__radio-group">
					<input type="radio" id="css" class="form__radio" value="CSS" name="code_language" />
					<label class="form__label" for="css">CSS</label>
				</section>
				<section class="form__radio-group">
					<input type="radio" id="js" class="form__radio" value="JS" name="code_language" />
					<label class="form__label" for="js">JavaScript</label>
				</section>
			</fieldset>
			<footer class="form__footer">
				<button
					type="button"
					class="form__button form__button--outlined"
					aria-label="Reset the form"
					data-js="reset-button">
					Reset
				</button>
				<button
					type="submit"
					class="form__button"
					aria-label="Save the new question"
					data-js="submit-button">
					Save question
				</button>
			</footer>
		</form>
	`;

	// Handle form submit
	form.querySelector('[data-js="form"]').addEventListener("submit", (event) => {
		event.preventDefault();

		// Create object from form data
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		// Prepare data
		data.code = data.code.split("\n");
		data.tags = data.tags.split(",");

		// Add loading indicator
		document.querySelector('[data-js="submit-button"]').innerHTML = '<span class="form__spinner"></span>Loading...';

		// Disable all buttons
		document.querySelectorAll("button").forEach((button) => {
			button.disabled = true;
		});

		setTimeout(() => {
			// Remove empty card
			document.querySelector('[data-js="card"]').remove();

			// Create card with content (card object, question object, new card y/n)
			document.querySelector('[data-js="main"]').append(Card(data, true));

			// Remove loading indicator
			document.querySelector('[data-js="submit-button"]').innerHTML = "Save question";

			// Enable all buttons
			document.querySelectorAll("button").forEach((button) => {
				button.disabled = false;
			});

			// Scroll card into view
			window.scrollTo({
				behavior: "smooth",
				top:
					document.querySelector('[data-js="card"]').getBoundingClientRect().top -
					document.body.getBoundingClientRect().top -
					24,
			});
		}, 3000);
	});

	// Handle form reset
	form.querySelector('[data-js="reset-button"]').addEventListener("click", () => {
		// Reset form
		document.querySelector('[data-js="form"]').reset();

		// Reset character counter
		document.querySelectorAll(".form__counter").forEach((counter) => {
			counter.innerHTML = "150 characters left";
		});

		// Remove card
		document.querySelector('[data-js="card"]').remove();

		// Create empty card
		document.querySelector('[data-js="main"]').append(EmptyCard());
	});

	// Handle character counter
	form.querySelectorAll("textarea").forEach((element) =>
		element.addEventListener("input", (event) => {
			// Select counter and calculate characters
			const counter = document.querySelector(`[data-js="${event.target.id}__counter"]`);
			counter.textContent = `${150 - event.target.value.length} characters left`;
		})
	);

	return form;
}
