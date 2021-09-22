var outputText=document.querySelector(".outputText");

var url="https://randomuser.me/api/?results=10";

fetch(url)
.then(response=>response.json())
.then(data=>{

    data.results.map(array=>{
        if(array.gender=="female")
        outputText.innerHTML+=`<p style="color:pink">${array.name.first}<p>`
        else
        outputText.innerHTML+=`<p>${array.name.first}</p>`
    })
})