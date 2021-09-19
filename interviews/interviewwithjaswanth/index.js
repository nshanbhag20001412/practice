var url='https://api.funtranslations.com/translate/yoda.json'
var displayText=document.querySelector(".display-text");
var btnRun=document.querySelector(".run");

function clickEventHandler(){

    fetch(url)
    .then(response=>{
    
        response.json()
        if(response.status !== 200)
        console.log(response);
        displayText.innerHTML="Try Again after sometime";
    }
    )
  
      
}

btnRun.addEventListener("click", clickEventHandler)
