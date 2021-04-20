var btnTranslate = document.querySelector("#btn-translate");
//querySelector is a way of telling the browser that Hey browser i need that elemrnt which has id #btn-translate
var txtInput=document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(txtInput)

function clickEventHandler(){
    outputDiv.innerText = "abbcdvifjncklkldkm "+ txtInput.value;
    // console.log("clicked!");
    // console.log("input",txtInput.value)
//Hey browser remember that btnTranslate reference you gave, could you please add a clickListener to it.Browser says "Yes, What do you want me to do when click happens ".Just console.log(). 
};
btnTranslate.addEventListener("click",clickEventHandler);
