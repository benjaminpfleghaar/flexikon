export default function Header(page) {
	// Create header and apply attributes
	const header = document.createElement("header");
	header.classList.add("header");

	// Build headline
	const headline = page !== "Home" ? `<h1 class="header__title"><span class="header__title--normal">Flexikon / </span>${page}</h1>` : `<h1 class="header__title">Flexikon</h1>`;

	// Set inner HTML of header
	header.innerHTML = `
		<section class="header__section">
            <img src="assets/components/Header/images/logo-20.svg" width="20" height="20" class="header__logo" alt="Flexikon Logo" />
            ${headline}
        </section>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li>
                    <a href="index.html" class="header__nav-link ${page === "Home" && "header__nav-link--active"}" title="Go to Home page">Home</a>
                </li>
                <li>
                    <a href="bookmarked.html" class="header__nav-link ${page === "Bookmarked" && "header__nav-link--active"}" title="View your bookmarked questions">Bookmarked</a>
                </li>
                <li>
                    <a href="profile.html" class="header__nav-link ${page === "Profile" && "header__nav-link--active"}" title="Go to Profile page">Profile</a>
                </li>
            </ul>
            <a href="create.html" class="header__add-question-link" title="Add a new question">Add question</a>
        </nav>
	`;

	return header;
}
