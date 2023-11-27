function toggle_section(dom_id) {
	dom_id.classList.toggle('open');
}

window.onload = function() {
	// Populate the various block section handles
	var block_section_handle_list = document.getElementsByClassName("block-section-handle")
	const section_handle_button_template = document.querySelector('#block-section-handle-template');
	if (section_handle_button_template) {
		for (const handle of block_section_handle_list) {
			var section_handle_button = section_handle_button_template.content.cloneNode(true);
			handle.prepend(section_handle_button);
		}
	}
	
	navbar = document.getElementById("nav-bar")
	if ( navbar ) { // Only try to set the element if we found something
		var navbar_html = ""
		navbar_html += "<ul>"
		navbar_html += "<li><a href='index.html'>Home</a></li>"
		navbar_html += "<li><a href='research.html'>Research</a></li>"
		navbar_html += "<li><a href='publications.html'>Publications</a></li>"
		navbar_html += "<li><a href='experience.html'>Education &amp Employment</a></li>"
		navbar_html += "<li class=\"no-hover\" style=\"flex: 1\"></li>"
		navbar_html += "<li class=\"no-hover\"> \
			<a href='https://www.github.com/fergu' target=\"_blank\"><img src='img/github-mark.svg' style=\"height: 24px;\" title=\"Github\" alt=\"Github\"></a> \
			<a href='https://orcid.org/0000-0001-6653-7482' target=\"_blank\"><img src='img/ORCIDiD.svg' style=\"height: 24px\" title=\"ORCiD\" alt=\"ORCiD\"></a> \
			<a href='mailto:subplot_spigot.0c@icloud.com?subject=fergu.net contact&body=(This email address is an iCloud relay address to avoid spambots/scrapers. I will reply from my personal email)'><img src='img/email.svg' style=\"height: 24px\" title=\"Email\" alt=\"Email me!\"></a><br> \
		</li>"
		navbar_html += "</ul>"
		navbar.innerHTML = navbar_html;
	}

	footer = document.getElementById("footer")
	if ( footer ) {
		const thisYear = (new Date()).getFullYear();
		footer.innerHTML = "&copy Kevin Ferguson, 2016-"+thisYear+".";
	}
}
