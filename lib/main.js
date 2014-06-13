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
  }
});
