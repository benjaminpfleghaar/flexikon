export default function Footer(page) {
	// Create footer and apply attributes
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	// Set inner HTML of footer
	footer.innerHTML = `
		<nav>
            <ul class="footer__nav-list">
                <li>
                    <a href="#home" class="footer__nav-link ${
						page === "Home" && "footer__nav-link--active"
					}" title="Go to Home page" data-js="link-home">
                        <img src="assets/components/Footer/images/home-24.svg" width="24" height="24" alt="Home icon" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#bookmarked" class="footer__nav-link ${
						page === "Bookmarked" && "footer__nav-link--active"
					}" title="View your bookmarked questions" data-js="link-bookmarked">
                        <img
                            src="assets/components/Footer/images/bookmark-24.svg"
                            width="24"
                            height="24"
                            alt="Bookmark icon" />
                        Bookmarked
                    </a>
                </li>
                <li>
                    <a href="#profile" class="footer__nav-link ${
						page === "Profile" && "footer__nav-link--active"
					}" title="Go to Profile page" data-js="link-profile">
                        <img src="assets/components/Footer/images/profile-24.svg" width="24" height="24" alt="Profile icon" />
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
	`;

	return footer;
}
