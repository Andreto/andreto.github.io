
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function setRandBackground() {
  rgb = "rgb(" + getRndInteger(250, 255) + ", " + getRndInteger(175, 255) + ", " + getRndInteger(175, 255) + ")";
  document.body.style.backgroundColor = rgb;
}

function newButton() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  var newBtn = document.createElement("button");
  newBtn.className = "activeButton ClickMe";
  newBtn.type = "button";
  newBtn.innerHTML = "Click Me";

  document.getElementById("btnCount").innerHTML = "Button Count: " + (document.getElementsByClassName("ClickMe").length);

  newBtn.onclick = function(){
    newButton(); this.className="disableButton ClickMe";
    this.onclick = function(){
      gameOver();
    }
  };

  newBtn.style.top = getRndInteger(60, (h-42)).toString() + "px";
  newBtn.style.left = getRndInteger(2, (w-122)).toString() + "px";

  document.body.appendChild(newBtn);
}

function gameOver() {
  document.getElementById("game-over").style.visibility = "visible";
}


function spawnButtons(n) {
  for(i=0;i<n;i++){
    newButton();
  }
}
