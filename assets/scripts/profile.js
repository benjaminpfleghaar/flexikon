import Header from "../components/Header/Header.js";
import Profile from "../components/Profile/Profile.js";
import Footer from "../components/Footer/Footer.js";

// Create header
document.body.prepend(Header("Profile"));

// Create profile
document.querySelector('[data-js="main"]').append(Profile());

// Create footer
document.body.append(Footer("Profile"));
