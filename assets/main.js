function loadContent() {
  for (i = 0; i < content["content-list"].length; i++) {
    var object = content["content"][content["content-list"][i]];

    var crelmGE = document.createElement("a");
    crelmGE.className = "grid-element";
    crelmGE.href = object["link"];
    var crelmImg = document.createElement("img");
    crelmImg.className = "ge-img";
    crelmImg.src = object["img"];
    var crelmText = document.createElement("div");
    crelmText.className = "ge-text";
    crelmText.innerHTML = object["title"];
    var crelmType = document.createElement("div");
    crelmType.className = "ge-type";
    crelmType.innerHTML = object["type"];
    crelmGE.appendChild(crelmImg);
    crelmGE.appendChild(crelmType);
    crelmGE.appendChild(crelmText);

    document.getElementById("main-grid").appendChild(crelmGE);
  }
}

function getLatestScratch() {
  var url = "http://api.spitcast.com/api/spot/forecast/1/";
  var url_wind = "http://api.spitcast.com/api/county/wind/orange-county/";

  $.when($.getJSON(url), $.getJSON(url_wind)).done(function(
    result1,
    result2
  ) {});
}

function togleContent(n) {
  $("#cont-switch-indicator-" + ["prjct", "prtfl"][n]).removeClass("inactive");
  $("#cont-switch-indicator-" + ["prtfl", "prjct"][n]).addClass("inactive");
}

function pageScroll() {
  var elems = document.querySelectorAll(".nav-fill");
  for (var i = 0; i < elems.length; i++) {
    if (window.scrollY == 0) {
      elems[i].style.boxShadow = "none";
    } else {
      elems[i].style.boxShadow = "0px 4px 8px -4px rgba(0,0,0,0.4)";
    }
  }
}
