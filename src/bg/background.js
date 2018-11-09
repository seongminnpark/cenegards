// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

resultsTabId = 1283924593;
data = {"init": false}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (sender.tab) {
      sendResponse(data);
    } else {
      data = request;
      sendResponse({});
    }
});