alert("Here we are in content-script.js");
var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; ++i) {
  divs[i].setAttribute("style", "border: solid green 1px;");' 
}
