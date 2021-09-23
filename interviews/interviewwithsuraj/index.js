var inputnumbers=document.querySelectorAll(".inputText");
var calculateBtn=document.querySelectorAll(".calculateBtn");

var changeColorBtn=document.querySelector("#changeColorBtn");
var outputText=document.querySelector("#outputText");

var change=""
function addNumber(){
    
   change="green";
   outputText.value=(Number(inputnumbers[0].value)+Number(inputnumbers[1].value))
   checkOutput();
}


function subNumber(){
    change="red"
    outputText.value=(Number(inputnumbers[0].value)-Number(inputnumbers[1].value))
    checkOutput();
}

function changeColor(){
  
    if(change==="red")
    outputText.style.color="red";
    else
    outputText.style.color="green"
}

function checkOutput(){

    if(outputText.value<0)
    outputText.value=0;
    
}

calculateBtn[0].addEventListener("click", addNumber)
calculateBtn[1].addEventListener("click", subNumber)
changeColorBtn.addEventListener("click",changeColor)