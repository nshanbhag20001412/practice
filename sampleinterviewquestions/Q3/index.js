const inputText=document.querySelector(".inputText");
const sizeBtns=document.querySelectorAll(".sizeBtn");
const fontSize=document.querySelectorAll(".fontSize");

if(sizeBtns)
{

sizeBtns[0].addEventListener("click", fontH1);
sizeBtns[1].addEventListener("click", fontH2);
sizeBtns[2].addEventListener("click", fontH3);

}

function fontH1(){

    text=inputText.value;
    fontSize[1].innerText="";
    fontSize[2].innerText="";
    fontSize[0].innerText=text;
    
}

function fontH2(){

    text=inputText.value;
    fontSize[2].innerText="";
    fontSize[0].innerText='';
    fontSize[1].innerText=text;
}

function fontH3(){

    text=inputText.value;
    fontSize[0].innerText='';
    fontSize[1].innerText='';
    fontSize[2].innerText=text;
}

