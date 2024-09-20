// Import
import { data } from "./lib/data.js";
import card from "../components/card/card.js";

// Show only cards with bookmark
let questions = data.filter((entry) => entry.bookmark);

// Select main container
const main = document.querySelector('[data-js="main"]');

// Create cards
questions.forEach((question) => main.append(card(question, false)));
