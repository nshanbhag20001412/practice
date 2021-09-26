var inputNumber=document.querySelectorAll(".inputNumber");
var inputOperator=document.querySelector(".input-operator");
var outputText=document.querySelector(".outputText");

var operatorArray=["+","-","*","/"]
function solveNumerical(){

    var operator=inputOperator.value;

    if(operatorArray.includes(operator)){
        
       switch(operator)
       {
           case "+":
           outputText.innerHTML= Number(inputNumber[0].value)+Number(inputNumber[1].value);
           break;

           case "-":
           outputText.innerHTML= Number(inputNumber[0].value)-Number(inputNumber[1].value);
           break;

           case "*" :
           outputText.innerHTML= Number(inputNumber[0].value)*Number(inputNumber[1].value);
           break;

           case "/":
           outputText.innerHTML= Number(inputNumber[0].value)/Number(inputNumber[1].value);
           break;


       }
    }
    else
    outputText.innerHTML="Enter Valid Operator"
    
}
inputOperator.addEventListener("input",solveNumerical);