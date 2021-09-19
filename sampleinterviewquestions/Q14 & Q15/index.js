const display=document.querySelector(".display");

var object2=
    {
        name:"Ram",
        age:"25",
        yuga:"Treta",

    };

var object1=
    {
        name:"Krishna",
        age:"31",
        yuga:"Dwapar",
    };


function age(obj1,obj2){

  if(obj1.age>obj2.age){

    console.log(obj1.name +" is older");
    display.innerHTML=obj1.name +" is older";

  }
  else{

    comsole.log(obj2.name +" is older");
    display.innerHTML=obj2.name +" is older"
  }

}

age(object1,object2);
