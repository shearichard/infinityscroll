var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
  label: "Log Selection",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	console.log("onMessage [a] **************************************************************************************************");
	console.log(selectionText);
	console.log("onMessage [b0] **************************************************************************************************");
	var fileIO = require("sdk/io/file");
	console.log("onMessage [b1] **************************************************************************************************");
	//var pathhide0 = fileIO.join("home","rshea", "dev", "mozsdk0", "addon-sdk-1.16", "infinityarchive", "lib", "testout.txt");
	console.log("onMessage [b2] **************************************************************************************************");
	//var pathhide1 = fileIO.join("/tmp/testout.txt");
	console.log("onMessage [b3] **************************************************************************************************");
	const { pathFor } = require('sdk/system')
	console.log("onMessage [b4] **************************************************************************************************");
	const path = require('sdk/fs/path'); // important for cross-platform compatibility 
	console.log("onMessage [b5] **************************************************************************************************");

	console.log("onMessage [b6] **************************************************************************************************");
	var profile = pathFor('ProfD');
	console.log("onMessage [b7] **************************************************************************************************");
	var filepath = path.join(profile, 'infinityscrolltestdata0.ini');
	console.log("onMessage [b8] **************************************************************************************************");
	console.log("onMessage [c] **************************************************************************************************");
	console.log(filepath);
	console.log("onMessage [d] **************************************************************************************************");
	writeTextToFile(selectionText, filepath);
  }
});


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


