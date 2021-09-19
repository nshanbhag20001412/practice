// var increaseCounter=document.querySelector(".increase");
// var decreaseCounter=document.querySelector(".decrease");
// var output=document.querySelector(".output");

// var counter=0;
// output.innerHTML=counter
// var click =0;
// function increaseFunction()
// {  
//    counter++;
//    click++;
//    if(click%3==0){
//        alert("You clicked 3 times");
//    }
//    output.innerHTML=counter;

// }
// function decreaseFunction()
// {
//    counter--;
//    output.innerHTML=counter;

// }

// increaseCounter.addEventListener("click",increaseFunction);
// decreaseCounter.addEventListener("click",decreaseFunction);

var inputText=document.querySelectorAll(".inputText");
var button=document.querySelector(".btn");

var Obj={

    name:"Neha",
};

function clickEventHandler(){

  var keyName=inputText[0].value;
  var valueName=inputText[1].value;
  Obj[keyName]=valueName;
  console.log(Obj);
}

button.addEventListener("click",clickEventHandler);