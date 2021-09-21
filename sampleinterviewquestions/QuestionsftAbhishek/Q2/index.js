var eligibleUser=document.querySelector(".eligibleUser");
var url="https://randomuser.me/api/?results=10";

fetch(url)
.then(response=>response.json())
.then(data=>{
            data.results.map(array=>{
                    
              if(array.dob.age>45){

                eligibleUser.innerHTML+=`<p style="color:green"> ${array.name.first}</p>`
              }
   
})})
