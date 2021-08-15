const inputText=document.querySelector("#inputText");
const sizeBtns=document.querySelectorAll(".sizeBtn");

if(sizeBtns)
{
sizeBtns[0].addEventListener("click",fontBig);
sizeBtns[0].addEventListener("click",fontSmall);
}

function fontBig(){
    curSize = parseInt(inputText.css('font-size'))
console.log(curSize);

}

function fontSmall(){

    font--;
}
