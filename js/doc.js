function loadxmldoc(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readystate = 4 && this.status = 200){
      document.write(this.responseText);
    }
  };
  xhttp.open("GET", "nocss.html", true):
  xhttp.send();
}
