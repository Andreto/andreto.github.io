function loadContent() {

  for (i=0;i<content["content-list"].length;i++) {
    var object = content["content"][(content["content-list"][i])];

    var crelmGE = document.createElement("a");crelmGE.className="grid-element";crelmGE.href=object["link"];
    var crelmImg = document.createElement("div");crelmImg.className="ge-img";crelmImg.style=("background-image:url("+object["img"]+");");
    var crelmText = document.createElement("div");crelmText.className="ge-text";crelmText.innerHTML=object["title"];
    crelmGE.appendChild(crelmImg);crelmGE.appendChild(crelmText);

    document.getElementById("main-grid").appendChild(crelmGE);
  }
}

function getLatestScratch() {
  var url = "http://api.spitcast.com/api/spot/forecast/1/";
  var url_wind = "http://api.spitcast.com/api/county/wind/orange-county/";

  $.when(
      $.getJSON(url),
      $.getJSON(url_wind)
  ).done(function(result1, result2) {

  });
}
