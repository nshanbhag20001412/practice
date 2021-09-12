
var content=document.querySelector(".content");
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(data=>{
    data.map(array=>{
            
        var titleText=array.title;
         if(array.completed===false)
        content.innerHTML+=`\n <p style="color:grey">Tittle:${titleText}</p>  \n Flag:${array.completed}`;
        else{
        content.innerHTML+=`\nTittle:${titleText} \n Flag:${array.completed}`;   
        }
    })
})