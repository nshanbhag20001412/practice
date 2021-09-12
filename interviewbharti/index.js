
var content=document.querySelector(".content");
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(data=>{
    data.map(array=>{
            
        var titleText=array.title;
         if(array.completed===false)
         style.titleText.color='grey';

        content.innerText=`${content.innerText} \n Tittle:${titleText} \n Flag:${array.completed}`;
    })
})