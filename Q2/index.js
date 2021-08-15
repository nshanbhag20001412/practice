const inputText=document.querySelector("#inputText");
const sizeBtns=document.querySelectorAll(".sizeBtn");

var fontSize = parseFloat(window.getComputedStyle(inputText, null).getPropertyValue('font-size')); 

if(sizeBtns)
{
sizeBtns[0].addEventListener("click",fontBig);
sizeBtns[1].addEventListener("click",fontSmall);
}

function fontBig(){

    fontSize++;



}

function fontSmall(){

    fontSize--;
    console.log(fontSize);
}
