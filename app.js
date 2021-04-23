var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input){
 return serverURL + "?" + "text=" + input
 alert("Something wrong with the server.Try again after sometime.")}

function errorHandler(error){
    console.log("error occured",error);
}

function clickEventHandler(){
   var inputText = txtInput.value; //taking input

   //calling server for processing
fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json =>{
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
  })
  .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickEventHandler);
 