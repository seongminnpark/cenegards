const sendRequest = () => {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://www.example.com?par=0", false);
  xhr.send();

  var result = xhr.responseText;
}

// Input validation.

const setValid = (element) => {
  element.removeClass("invalid");
  element.addClass("valid");
}

const setInvalid = (element) => {
  element.removeClass("valid");
  element.addClass("invalid");
}

const setNeutral = (element) => {
  element.removeClass("valid");
  element.removeClass("invalid");
}

// const validateGeneNames = (text) => {
  
// }

// const validateAnimals = (text) => {

// }

$("#submitButton").click(() => {
  chrome.tabs.create({url: 'browser_action.html'})
});

$("#geneNames").focusout(() => {
  trimmedText = $("#geneNames").val().trim().toLowerCase();
  if(trimmedText == "") {
    setNeutral($("#geneNames"));
    return;
  }
  splitText = trimmedText.split(",");
  for (i in splitText) {
    if(splitText[i] == "" || splitText[i].includes(" ")) {
      setInvalid($("#geneNames"));
      return;
    }
  }
  setValid($("#geneNames"));
});

$("#animals").focusout(() => {
  trimmedText = $("#animals").val().trim().toLowerCase();
  if(trimmedText == "") {
    setNeutral($("#animals"));
    return;
  }
  splitText = trimmedText.split(",");
  for (i in splitText) {
    if(splitText[i] == "") {
      setInvalid($("#animals"));
      return;
    }
  }
  setValid($("#animals"));
});