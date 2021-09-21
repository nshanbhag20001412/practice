var inputText=document.querySelector("#input-text");
var outputText=document.querySelector("#output-text")
var reverseBtn=document.querySelector("#reverse-btn")



function textReverse(){
    outputText.innerHTML=inputText.value.split('').reverse().join("");
}
reverseBtn.addEventListener("click",textReverse);


//MISTAKES DONE
// textReverse() on line 10 => makes it a callback function
// innerHTML syntax