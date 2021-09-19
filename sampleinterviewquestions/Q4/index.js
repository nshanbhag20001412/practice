const inputText=document.querySelector(".inputText");
const colorBtn=document.querySelectorAll(".colorBtn");

if(colorBtn){

    colorBtn[0].addEventListener("click", colorRed);
    colorBtn[1].addEventListener("click", colorGreen);
    colorBtn[2].addEventListener("click", colorBlue);

}

function colorRed(){

    inputText.style.color="red";

}

function colorGreen(){

   inputText.style.color="green";
}

function colorBlue(){

    inputText.style.color="blue";
}