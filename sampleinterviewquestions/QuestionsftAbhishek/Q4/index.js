var url="https://randomsuser.me/api/";
var outputText=document.querySelector(".output-text");


fetch(url)
.then(response=>console.log(response))
.catch(error=>{
    outputText.innerHTML=error.name;
    console.log(error.message)})