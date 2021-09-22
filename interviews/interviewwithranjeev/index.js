 var display=document.querySelector(".display");
 var show=document.querySelector(".show");

 var obj1={
     name:"Ram ",
     age:"25",
     yuga:"treta",

 }

 var obj2={
    name:"Krishna",
    age:"18",
    yuga:"dwapar",
    
}

show.addEventListener("click",higherAge(obj1,obj2));

function higherAge(object1, object2){

    if(object1.age>object2.age){

        display.innerHTML=object1.name +" is elder than " + object2.name;
    }
    else{

        display.innerHTML=object2.name +" is elder than " + object1.name;
    }
}



