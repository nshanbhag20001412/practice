var inputText=document.querySelector(".input-text");
var sizeBtn=document.querySelectorAll(".size-btn");
var output=document.querySelector(".output");



function increaseSize(){

    var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
    fontSize=fontSize+2;
    var input= inputText.value;
    output.style.fontSize=fontSize + 'px';
    output.innerText=input;

}

function decreaseSize(){

    var fontSize=parseInt(window.getComputedStyle(inputText).getPropertyValue('font-size'));
    fontSize=fontSize-2;
    var input= inputText.value;
    output.style.fontSize=fontSize + 'px';
    output.innerText=input;
}

if(sizeBtn){
    sizeBtn[0].addEventListener("click", increaseSize);
    sizeBtn[1].addEventListener("click", decreaseSize);
}




