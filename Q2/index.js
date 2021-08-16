const inputText=document.querySelector("#inputText");
const sizeBtns=document.querySelectorAll(".sizeBtn");



if(sizeBtns)
{
sizeBtns[0].addEventListener("click",fontBig);
sizeBtns[1].addEventListener("click",fontSmall);
}

function fontBig(){

  var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
  fontSize=fontSize+2;
  inputText.style.fontSize=fontSize + 'px';
}

function fontSmall(){
   
  var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
  fontSize=fontSize-2;
  console.log(fontSize);
  inputText.style.fontSize=`${fontSize}px`;
}
