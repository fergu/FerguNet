function setToText(id, textSrc) {
    $(id).load(textSrc);
}

function fadeToText(id, textSrc) {
  $(id).animate({'opacity': 0}, 200, function () {
    $(this).load(textSrc);
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

  // This should default to setting the home link
  setToText(bodytext,"./subpages/home.html")
  selectLi(navlist,homelink.parentNode);

  homelink.onclick = function() {
    fadeToText(bodytext,"./subpages/home.html")
    selectLi(navlist,homelink.parentNode);
    return false;
  }

  aboutlink.onclick = function() {
    fadeToText(bodytext,"./subpages/about.html");
    selectLi(navlist,aboutlink.parentNode);
    return false;
  }

  projectlink.onclick = function() {
    fadeToText(bodytext,"./subpages/projects.html");
    selectLi(navlist,projectlink.parentNode);
    return false;
  }

  contactlink.onclick = function() {
    fadeToText(bodytext,"./subpages/contact.html");
    selectLi(navlist,contactlink.parentNode);
    return false;
  }
}
