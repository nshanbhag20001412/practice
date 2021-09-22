var passwordInput=document.querySelector("#password-input");
var btnToggle=document.querySelector("#toggle");

function changeInputBorder(){

 if(passwordInput.value.length>10)
   passwordInput.style.borderColor="green"
 else
   passwordInput.style.borderColor="black"
}
btnToggle.addEventListener("click",()=>{

    if(passwordInput.getAttribute("type")==="password")
       passwordInput.setAttribute("type","text")
    else
       passwordInput.setAttribute("type","password")

})

passwordInput.addEventListener("input", changeInputBorder)




