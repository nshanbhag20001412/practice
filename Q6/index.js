const loadedBtn=document.querySelector(".loaded");
var textLoading=document.querySelector(".textLoading");

if(loadedBtn){

    loadedBtn.addEventListener("click",display);
}

function display()
{
    console.log()
     textLoading.style.display="none";
}
