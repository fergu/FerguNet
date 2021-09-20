function toggle_section(dom_id) {
	dom_id.classList.toggle('open');
}

// This is the HTML template for the navigation bar.
// Putting it here as it allows for the nav bar to be edited in a single spot for all pages
// It may be more "appropriate" to put this in its own HTML and use jquery, etc, to obtain it
const navbar_html = `
		<ul>
			<li>
				<a href='./index.html'>
				<h1>./fergu.net</h1>
				<h6>Homepage of Kevin Ferguson</h6>
				</a>
			</li>
			<hr>
			<li><a href='./about.html'>Resume</a></li>
			<li><a href='https://www.github.com/fergu' target="_blank">Github</a></li>
			<li><a href='./projects.html'>Projects</a></li>
			<li><a href='./contact.html'>Contact</a></li>
		</ul>
		<div class='vert-spacer'></div>
		<div id='footer'></div>
	`


window.onload = function() {
	// Populate the various block section handles
	var block_section_handle_list = document.getElementsByClassName("section-handle")
	const section_handle_button_template = document.querySelector('#section-handle-template');
	if (section_handle_button_template) {
		for (const handle of block_section_handle_list) {
			var section_handle_button = section_handle_button_template.content.cloneNode(true);
			handle.prepend(section_handle_button);
		}
	}

	document.getElementById("nav-bar").innerHTML = navbar_html;

	const thisYear = (new Date()).getFullYear();
	document.getElementById("footer").innerHTML = "Created by Kevin Ferguson, copyright 2016-"+thisYear+", all rights reserved.";
}
