var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#op-div");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log(error,"occured !");
    alert("Sorry something went wrong, please try later !");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);