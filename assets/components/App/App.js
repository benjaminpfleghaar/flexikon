import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import CardList from "../CardList/CardList.js";
import FormView from "../FormView/FormView.js";
import Profile from "../Profile/Profile.js";
import CardListBookmarked from "../CardListBookmarked/CardListBookmarked.js";

export default function App() {
	// Create app
	const app = document.createElement("div");
	app.setAttribute("id", "root");
	app.append(Header("Home"), CardList(), CardListBookmarked(), Profile(), FormView(), Footer("Home"));

	return app;
}
