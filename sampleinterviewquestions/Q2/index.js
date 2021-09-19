const inputText=document.querySelector("#inputText");
const sizeBtns=document.querySelectorAll(".sizeBtn");
var display=document.querySelector(".display");



if(sizeBtns)
{
sizeBtns[0].addEventListener("click",fontBig);
sizeBtns[1].addEventListener("click",fontSmall);
}

function fontBig(){

  var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
  fontSize=fontSize+2;
  input=inputText.value
  inputText.style.fontSize=fontSize + 'px';
  display.style.fontSize=fontSize + 'px';
  display.innerText=input;
}

function fontSmall(){
   
  var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
  fontSize=fontSize-2;
  console.log(fontSize);
  inputText.style.fontSize=`${fontSize}px`;
}
