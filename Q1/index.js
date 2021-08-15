const inputs=document.querySelectorAll(".numberInput");
const calculateBtns=document.querySelectorAll(".calculateBtn");
const display= document.querySelector(".display");

if(calculateBtns){

    calculateBtns[0].addEventListener("click", add);
    calculateBtns[1].addEventListener("click", sub);
    calculateBtns[2].addEventListener("click", mul);
    calculateBtns[3].addEventListener("click", div);
}




function add(){

   display.innerHTML=inputs[0].value +"+" +inputs[1].value+"=" +( Number(inputs[0].value)+Number(inputs[1].value)) ;
  
}

function sub(){

    display.innerHTML=inputs[0].value +"-" +inputs[1].value+"=" +( Number(inputs[0].value)-Number(inputs[1].value)) ;
   
 }

 function mul(){

    display.innerHTML=inputs[0].value +"*" +inputs[1].value+"=" +( Number(inputs[0].value)*Number(inputs[1].value)) ;
   
 }

 function div(){

    display.innerHTML=inputs[0].value +"/" +inputs[1].value+"=" +( Number(inputs[0].value)/Number(inputs[1].value)) ;
   
 }

