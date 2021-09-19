var inputNumber=document.querySelector("#input-number");
var checkButton=document.querySelector("#check-btn");
var output=document.querySelector("#output");

function checkEvenOdd(){
    
    if(Number(inputNumber.value)%2==0){
     
        output.innerHTML="even";
    }

    else{

        output.innerHTML="odd";
    }
}

checkButton.addEventListener("click", checkEvenOdd);