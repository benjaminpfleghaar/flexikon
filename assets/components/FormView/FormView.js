import Form from "../Form/Form.js";
import EmptyCard from "../EmptyCard/EmptyCard.js";

export default function FormView() {
	// Create container
	const formView = document.createElement("main");
	formView.classList.add("main--hidden");
	formView.setAttribute("data-js", "main-form");
	formView.setAttribute("hidden", "");
	formView.setAttribute("id", "form");
	formView.append(Form(), EmptyCard());

	return formView;
}
