var eligibleUser=document.querySelector(".eligibleUser");
var url="https://randomuser.me/api/?results=10";

fetch(url)
.then(response=>response.json())
.then(data=>{
            data.results.map(array=>{
                    
              if(array.dob.age>45){

                // eligibleUser.innerHTML+=`<p style="color:green"> ${array.name.first}</p>`

                eligibleUser.innerHTML+=` <h1 style="color:${array.dob.age > 45 ? 'green' : ''}">${array.name.first}</h1>
                <p>${array.dob.age}</p>`
              }
              else
              eligibleUser.innerHTML+=` <p> ${array.name.first}</p>`

   
})})
