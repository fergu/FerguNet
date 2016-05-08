function fadeToText(id, text) {
  $(id).animate({'opacity': 0}, 200, function () {
    $(this).text(text);
  }).animate({'opacity': 1}, 200);
}

window.onload = function() {
  // Get ID's of each of our navigation links
  var homelink = document.getElementById("homelink");
  var aboutlink = document.getElementById("aboutlink");
  var projectlink = document.getElementById("projectlink");
  var contactlink = document.getElementById("contactlink");

  // Get ID of the main page text box
  var bodytext = document.getElementById("BodyText");

  homelink.onclick = function() {
    fadeToText(bodytext,"Home Link Text!")
    return false;
  }

  aboutlink.onclick = function() {
    fadeToText(bodytext,"About Link Text!")
    return false;
  }

  projectlink.onclick = function() {
    fadeToText(bodytext,"Project Link Text!")
    return false;
  }

  contactlink.onclick = function() {
    fadeToText(bodytext,"Contact Link Text!")
    return false;
  }
}
