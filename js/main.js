function toggle_section(dom_id) {
	console.log(dom_id)
	//document.getElementById(dom_id).classList.toggle('open');
	dom_id.classList.toggle('open');
}

window.onload = function() {
	const thisYear = (new Date()).getFullYear();
	document.getElementById("footer").innerHTML = "Created by Kevin Ferguson, copyright 2016-"+thisYear+", all rights reserved.";
}
