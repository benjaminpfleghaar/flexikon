import { questions } from "./lib/data.js";
import Card from "../components/Card/Card.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

// Create header
document.body.prepend(Header("Home"));

// Create cards
questions.forEach((question) => document.querySelector('[data-js="main"]').append(Card(question, false)));

// Create footer
document.body.append(Footer("Home"));
