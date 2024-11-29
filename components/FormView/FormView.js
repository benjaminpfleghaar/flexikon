import Form from "../Form/Form.js";
import EmptyCard from "../EmptyCard/EmptyCard.js";

export default function FormView() {
	// Create container
	const formView = document.createElement("main");
	formView.setAttribute("data-js", "main");
	formView.append(Form(), EmptyCard());

	return formView;
}
