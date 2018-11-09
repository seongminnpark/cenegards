data = {"init": false}

$(window).on('load', function() {
  chrome.runtime.sendMessage({}, function(response) {
    data = response;
    console.log(data)
  });
});