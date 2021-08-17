const inputText=document.querySelector(".text");
const callBtn=document.querySelector(".call");
const display=document.querySelector(".display");

var serverUrl="#";

function clickEventHandler(){

    var inputContent = inputText.value;

    fetch(callAPI(inputContent))
    .then(response => response.json())
    .then(json => {
        var receivedText = json.contents.;
        display.innerText = receivedText; // output
       })
}

 function callAPI(inputContent){
    console.log(inputContent);
    return serverUrl + inputContent;
 }


if(callBtn){
 
 callBtn.addEventListener("click", clickEventHandler);
}