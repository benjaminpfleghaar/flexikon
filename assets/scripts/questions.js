// Questions object
const questions = [
	{
		question: "Which CSS property is used to change the text color?",
		answer: "color",
		description: "The color property sets the color of the text.",
		code_language: "CSS",
		code: ["p {", "color: blue;", "}"],
		tags: ["css", "color", "text"],
	},
	{
		question: "Which HTML element is used to define a hyperlink?",
		answer: "a",
		description: "The &lt;a&gt; tag defines a hyperlink in HTML.",
		code_language: "HTML",
		code: ["&lt;a href='https://example.com'&gt;", "Visit Example", "&lt;/a&gt;"],
		tags: ["html", "hyperlink", "link"],
	},
	{
		question: "Which CSS property is used to set the background image of an element?",
		answer: "background-image",
		description: "The background-image property sets a background image.",
		code_language: "CSS",
		code: ["div {", "background-image: url('image.jpg');", "}"],
		tags: ["css", "background", "image"],
	},
	{
		question: "Which HTML element represents a table row?",
		answer: "tr",
		description: "The &lt;tr&gt; tag defines a row in an HTML table.",
		code_language: "HTML",
		code: ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;Data&lt;/td&gt;", "&lt;/tr&gt;", "&lt;/table&gt;"],
		tags: ["html", "table", "row"],
	},
	{
		question: "Which CSS property controls the space between an element's border and content?",
		answer: "padding",
		description: "Padding defines the space inside an element's border.",
		code_language: "CSS",
		code: ["div {", "padding: 20px;", "}"],
		tags: ["css", "padding", "spacing"],
	},
	{
		question: "Which HTML element is used for embedding multimedia elements like videos?",
		answer: "video",
		description: "The &lt;video&gt; tag is used for embedding video content.",
		code_language: "HTML",
		code: ["&lt;video controls&gt;", "&lt;source src='video.mp4' type='video/mp4'&gt;", "&lt;/video&gt;"],
		tags: ["html", "multimedia", "video"],
	},
];

// Create cards
const createCards = () => {
	// Select parent
	const main = document.querySelector('[data-js="main"]');

	for (let i = 0; i < questions.length; i++) {
		// Create card container and apply attributes
		const card = document.createElement("article");
		card.setAttribute("class", "card");
		card.setAttribute("tabindex", "0");
		card.setAttribute("data-js", "card");

		// Check if parent is index or bookmarks
		let path = window.location.pathname;
		let page = path.split("/").pop();
		const isCardbookmarked = page !== "index.html" ? "card__bookmark-button--active" : "";

		// Create code block
		let code = "";
		for (let j = 0; j < questions[i].code.length; j++) {
			if (j === 0 || j === questions[i].code.length - 1) {
				code += `<span>${questions[i].code[j]}</span>`;
			} else {
				code += `<span class="card__code-line--offset">${questions[i].code[j]}</span>`;
			}
		}

		// Create tag list
		let tags = "";
		for (let k = 0; k < questions[i].tags.length; k++) {
			tags += `<li class="card__tag">${questions[i].tags[k]}</li>`;
		}

		// Fill the card with content
		card.innerHTML = `
		<aside class="card--highlight" aria-hidden="true"></aside>
		<section class="card__question" data-js="question">
			<h2 class="card__title">${questions[i].question}</h2>
		</section>
		<section class="card__answer card__answer--hidden" data-js="answer" hidden>
			<h2 class="card__title">${questions[i].answer}</h2>
			<p class="card__description">
				${questions[i].description}
			</p>
			<section class="card__code-block">
				<small class="card__code-language">${questions[i].code_language}</small>
				<code class="card__code">
					${code}
				</code>
			</section>
		</section>
		<footer class="card__footer">
			<ul class="card__tags-list">
				${tags}
			</ul>
			<button
				type="button"
				class="card__bookmark-button ${isCardbookmarked}"
				aria-label="Bookmark this question"
				data-js="bookmark-button">
				<span class="card__bookmark-button-text--hidden">Bookmark</span>
			</button>
		</footer>
	`;

		// Append card to the main container
		main.append(card);
	}
};

export default createCards;
