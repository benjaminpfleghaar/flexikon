export default function Footer(page) {
	// Create footer and apply attributes
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	// Set inner HTML of footer
	footer.innerHTML = `
		<nav>
            <ul class="footer__nav-list">
                <li>
                    <a href="index.html" class="footer__nav-link ${page === "Home" ? "footer__nav-link-home--active" : "footer__nav-link-home "}" title="Go to Home page">Home</a>
                </li>
                <li>
                    <a href="bookmarks.html" class="footer__nav-link ${page === "Bookmarks" ? "footer__nav-link-bookmarked--active" : "footer__nav-link-bookmarked"}" title="View your bookmarked questions">Bookmarks</a>
                </li>
                <li>
                    <a href="profile.html" class="footer__nav-link ${page === "Profile" ? "footer__nav-link-profile--active" : "footer__nav-link-profile"}" title="Go to Profile page">Profile</a>
                </li>
            </ul>
        </nav>
	`;

	return footer;
}
