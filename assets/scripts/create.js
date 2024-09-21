import Card from "../components/Card/Card.js";
import Form from "../components/Form/Form.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import EmptyCard from "../components/EmptyCard/EmptyCard.js";

// Create header
document.body.prepend(Header("Create"));

// Create form
document.querySelector('[data-js="main"]').append(Form());

// Create empty card
document.querySelector('[data-js="main"]').append(EmptyCard());

// Create footer
document.body.append(Footer("Create"));

// Listen to form
document.querySelector('[data-js="form"]').addEventListener("submit", (event) => {
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

// Count characters
document.querySelectorAll("textarea").forEach((element) => {
	element.addEventListener("input", (event) => {
		// Select counter and calculate characters
		const counter = document.querySelector(`[data-js="${event.target.id}__counter"]`);
		counter.textContent = `${150 - event.target.value.length} characters left`;
	});
});

// Reset form
document.querySelector("[data-js=reset-button]").addEventListener("click", () => {
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
