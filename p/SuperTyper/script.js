var wrong = 0;
var total = 0;
var speed = 0;
var lastTime = 0;

function loadChars(){
  var possible = "abcdefghijklmnopqrstuvwxyz";
  var letters = "";
  for (i = 0; i < 20; i++) {
    letters += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.getElementById("letter-holder").innerHTML = letters;
}

function updateLetters(event){
  s = document.getElementById("letter-holder").innerHTML;
  var possible = "abcdefghijklmnopqrstuvwxyz";
  var key = event.which || event.keyCode;
  total = total+1

  if (String.fromCharCode(key) == s[0]){
    s = s.substring(1);
    s += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById("letter-holder").innerHTML = s;

      var d = new Date();

      if (lastTime == 0){
        lastTime = Math.round(d.getTime()/100)/10;
      }else{
        speed = (speed*(total-1)+((Math.round(d.getTime()/100)/10)-lastTime))/total;
        lastTime = (Math.round(d.getTime()/100)/10);
      }

  }else{
    wrong = wrong+1
  }

  var accuracy = Math.round(((total-wrong)/total)*100);
  console.log(accuracy, Math.round(speed*100)/100);

  document.getElementsByTagName("td")[0].innerHTML = accuracy + "%";
  document.getElementsByTagName("td")[1].innerHTML = Math.round(speed*100)/100 + "s";

}
