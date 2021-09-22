var modeButton=document.querySelector(".changeMode");

let counter=0;
    
function changeMode(){
    counter++;
    console.log(counter);
    if(counter%2!==0){

        document.body.style.backgroundColor ="grey"
    }
    else
    document.body.style.backgroundColor = "white"
}
modeButton.addEventListener("click",changeMode);