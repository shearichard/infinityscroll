var contextMenu = require("sdk/context-menu");


//TAKE 2 on the button invoked code START
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.mozilla.org/");
}
//TAKE 2 on the button invoked code END   


//Hide the initial, currently not working, button invoked code START
//require("sdk/ui/button/action").ActionButton({
//  id: "highlight-divs",
//  label: "Highlight divs",
//  icon: "./icon-16.png",
//  onClick: function() {
//    require("sdk/tabs").activeTab.attach({
//      contentScript:
//        'var divs = document.getElementsByTagName("div");' +
//        'for (var i = 0; i < divs.length; ++i) {' +
//          'divs[i].setAttribute("style", "border: solid red 1px;");' +
//        '}'
//    });
//  }
//});
//Hide the initial, currently not working, button invoked code START

var menuItem = contextMenu.Item({
  label: "Log Selection",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	console.log(selectionText);
	var fileIO = require("sdk/io/file");
	const { pathFor } = require('sdk/system')
	const path = require('sdk/fs/path'); // important for cross-platform compatibility 
	var profile = pathFor('ProfD');
	var filepath = path.join(profile, 'infinityscrolltestdata0.ini');
	console.log(filepath);
	writeTextToFile(selectionText, filepath);
  }
});


//START : Hide the "show alert" code in case it is that that is driving the code made when running tests .
//var tabs = require("sdk/tabs");
//var contentScriptString = 'window.alert("InfinityScroll was here");'
//
//tabs.activeTab.attach({
//  contentScript: contentScriptString
//});
//END : Hide the "show alert" code in case it is that that is driving the code made when running tests .

function writeTextToFile(text, filename) {
  var fileIO = require("sdk/io/file");
//  if (fileIO.exists(filename)){
//      fileIO.remove(filename);
//  }
  var TextWriter = fileIO.open(filename, "w");
  if (!TextWriter.closed) {
    TextWriter.write(text);
    TextWriter.close();
  }
}
//NS_ERROR_FILE_UNRECOGNIZED_PATH


