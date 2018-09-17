function loadContent() {
  console.log(content["content-list"].length);

  for (i=0;i<content["content-list"].length;i++) {
    var object = content["content"][(content["content-list"][i])]
    console.log(object["link"]);

    var crelmGE = document.createElement("a");crelmGE.className="grid-element";crelmGE.href=object["link"];
    var crelmImg = document.createElement("div");crelmImg.className="ge-img";crelmImg.style=("background-image:url("+object["img"]+");")
    var crelmText = document.createElement("div");crelmText.className="ge-text";crelmText.innerHTML=object["title"];
    crelmGE.appendChild(crelmImg);crelmGE.appendChild(crelmText);

    document.getElementById("main-grid").appendChild(crelmGE);
  }
}
