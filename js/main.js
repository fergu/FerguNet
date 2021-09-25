function toggle_section(dom_id) {
	dom_id.classList.toggle('open');
}

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

	//document.getElementById("nav-bar").innerHTML = navbar_html;

	const thisYear = (new Date()).getFullYear();
	document.getElementById("footer").innerHTML = "Created by Kevin Ferguson, copyright 2016-"+thisYear+", all rights reserved.";
}
