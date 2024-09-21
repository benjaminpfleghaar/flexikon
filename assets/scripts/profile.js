import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Profile from "../components/profile/Profile.js";

// Append components
document.body.append(Header("Profile"), Profile(), Footer("Profile"));
