var inputText=document.querySelector("#text-input");
var submit=document.querySelector("#submit");


inputText.addEventListener("input",()=>{
    
     submit.disabled=false;
})