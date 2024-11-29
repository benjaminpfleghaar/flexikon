import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import CardList from "../components/CardList/CardList.js";

// Append components
document.body.append(Header("Home"), CardList(false), Footer("Home"));
