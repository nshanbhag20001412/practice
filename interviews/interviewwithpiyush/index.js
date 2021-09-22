inputText=document.querySelector(".input-text");
submitBtn=document.querySelector(".submit-btn");
display=document.querySelector(".display");

var input= inputText.value;
console.log(inputText);
var symbol=/@/;

input.addEventListener("keyup",()=>{if(input.length< 10){

    display.innerHTML="password should be greater than 10";
    if(symbol.test(input)){

    }
    else{
         display.innerHTML="passwors should consist of '@' symbol"
    }
    
}
else{

    display.innerHTML="password is good!";
}})
