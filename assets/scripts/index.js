// Import
import { data } from "./lib/data.js";
import card from "../components/card/card.js";

// Select main container
const main = document.querySelector('[data-js="main"]');

// Create cards
data.forEach((question) => main.append(card(question, false)));
