
var para=document.querySelector(".para");
var fontBtn=document.querySelectorAll(".font-btn")
let font=16
para.style.fontSize=16+'px';

function increaseFont(){
 
    font=font+2;
    para.style.fontSize=font+'px';
    console.log(para.style.fontSize);
    paraColor();

}
function decreaseFont(){
    font=font-2;
    para.style.fontSize=font+'px';
    console.log(para.style.fontSize);
    paraColor();

}

function paraColor(){
  
    if(font%5===0)
    para.style.color="red";
    else if(font%3===0)
    para.style.color="blue";
    else
    para.style.color="black";
}


  
fontBtn[0].addEventListener("click", increaseFont);
fontBtn[1].addEventListener("click", decreaseFont);  
