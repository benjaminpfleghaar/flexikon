export default function Profile() {
	// Create container
	const profile = document.createElement("main");
	profile.setAttribute("data-js", "main");

	// Set inner HTML of profile
	profile.innerHTML = `
        <article class="profile">
            <img src="assets/components/Profile/images/avatar.jpg" class="profile__avatar" width="80" height="80" alt="Jamie Torres" />
            <h2 class="profile__title">
                Jamie Torres<small class="profile__title--small">Senior Quiz Master</small>
            </h2>
            <ul class="profile__tags-list">
                <li class="profile__tag"><span class="profile__tag--highlight">6</span>Questions</li>
                <li class="profile__tag"><span class="profile__tag--highlight">2</span>Bookmarked</li>
            </ul>
            <p class="profile__bio">
                Quiz app enthusiast, gaming aficionado, and pizza lover. Always on the lookout for the next fun
                challenge and the perfect slice.
            </p>
        </article>
	`;

	return profile;
}
