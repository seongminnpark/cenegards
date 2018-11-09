chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("gor msg")
    if (request.greeting == "hello") {
      sendResponse({farewell: "goodbye"});
    }
});

$(window).on('load', function() {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {

  });
});