
var displayText=document.querySelector(".displayText");
var btnLoad=document.querySelector(".loading");

btnLoad.addEventListener("click", hideLoading);

function hideLoading(){

    displayText.style.display="none";
    //try using adding class hidden
}