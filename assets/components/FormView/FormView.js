import Form from "../Form/Form.js";
import EmptyCard from "../EmptyCard/EmptyCard.js";

export default function CreateView() {
	// Create container
	const createView = document.createElement("main");
	createView.classList.add("main-content");
	createView.setAttribute("data-js", "main");
	createView.append(Form(), EmptyCard());

	return createView;
}
