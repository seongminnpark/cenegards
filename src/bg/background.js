// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var resultsTabId = 1283924593;
var data = {"data": "boo"}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (sender.tab) {
      sendResponse(request);
    } else {
      data = request;
    }
});