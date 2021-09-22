var passwordInput=document.querySelector("#password-input");
var btnToggle=document.querySelector("#toggle");

function changeInputBorder(){
   e.target.style.outline = "none";

 if(passwordInput.value.length>10)
 e.target.style.outline="green"
 else
 e.target.style.outline ="black"
 
}
btnToggle.addEventListener("click",()=>{

    if(passwordInput.getAttribute("type")==="password")
       passwordInput.setAttribute("type","text")
    else
       passwordInput.setAttribute("type","password")

})

passwordInput.addEventListener("focus", changeInputBorder)




