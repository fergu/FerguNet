function fadeToText(id, text) {
  $(id).animate({'opacity': 0}, 200, function () {
    $(this).text(text);
  }).animate({'opacity': 1}, 200);
}

function selectLi(ul, liToSelect) {
  $(ul).find('.isActive').removeClass('isActive',500).addClass('isInactive');
  $(liToSelect).removeClass('isInactive').addClass('isActive');
}

window.onload = function() {
  // Get ID's of each of our navigation links
  var homelink = document.getElementById("homelink");
  var aboutlink = document.getElementById("aboutlink");
  var projectlink = document.getElementById("projectlink");
  var contactlink = document.getElementById("contactlink");

  // Get ID of the main page text box
  var bodytext = document.getElementById("BodyText");
  var navlist = document.getElementById("NavList");

  homelink.onclick = function() {
    fadeToText(bodytext,"Home Link Text!")
    selectLi(navlist,homelink.parentNode);
    return false;
  }

  aboutlink.onclick = function() {
    fadeToText(bodytext,"About Link Text!");
    selectLi(navlist,aboutlink.parentNode);
    return false;
  }

  projectlink.onclick = function() {
    fadeToText(bodytext,"Project Link Text!");
    selectLi(navlist,projectlink.parentNode);
    return false;
  }

  contactlink.onclick = function() {
    fadeToText(bodytext,"Contact Link Text!");
    selectLi(navlist,contactlink.parentNode);
    return false;
  }
}
