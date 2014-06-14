//Testing commit 
var contextMenu = require("sdk/context-menu");

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
	alertMe(selectionText);
  }
});

var tabs = require("sdk/tabs");
var contentScriptString = 'document.body.innerHTML = "<h1>this page has been eaten</h1>";'
var contentScriptString = 'window.alert("InfinityScroll was here");'

tabs.activeTab.attach({
  contentScript: contentScriptString
});

function alertMe(text) {


}

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


