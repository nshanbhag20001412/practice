// METHOD1
// var content=document.querySelector(".content");
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response=>response.json())
// .then(data=>{
//     data.map(array=>{
            
//         var titleText=array.title;
//          if(array.completed===false)
//         content.innerHTML+=`\n <p style="color:grey">Tittle:${titleText}</p>  \n Flag:${array.completed}\n`;

//         else{
//         content.innerHTML+=`\nTittle:${titleText} \n Flag:${array.completed}`;   
//         }
//     })
// })


// METHOD 2

var content=document.querySelector(".content");
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(json => 
        {
            
            for(i=0 ; i<json.length ; i++)
            {
                var titleText=json[i].title;
                if(json[i].completed === false){
                    
                content.innerHTML+=`\n <p style="color:grey">Tittle:${titleText}</p>   Flag:${json[i].completed}\n`;

                console.log(` %c Tittle:${titleText}`,`color:grey` ,` \n Flag:${json[i].completed}\n`);
                }
                else
                content.innerHTML+=`\nTittle:${titleText} \n Flag:${json[i].completed}`;   
                console.log(` Tittle:${titleText} \n Flag:${json[i].completed}\n`);
            }
        } 
     )