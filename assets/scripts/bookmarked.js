import { questions } from "./lib/data.js";
import Header from "../components/Header/Header.js";
import Card from "../components/Card/Card.js";
import Footer from "../components/Footer/Footer.js";

// Create header
document.body.prepend(Header("Bookmarked"));

// Show only cards with bookmark
let filteredQuestions = questions.filter((entry) => entry.bookmark);

// Create cards
filteredQuestions.forEach((question) => document.querySelector('[data-js="main"]').append(Card(question, false)));

// Create footer
document.body.append(Footer("Bookmarked"));
