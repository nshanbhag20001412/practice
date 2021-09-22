//with call back
const getToDosCallBack=( response,callBack)=>{
    const request= new XMLHttpRequest();
    
    request.addEventListener('readystatechange',()=>{
    
        if(request.readyState===4 && request.status===200){
            const data=JSON.parse(request.responseText);
            callBack(undefined,data);
        }
        else if(request.readyState===4){
        callBack("could not fetch data",undefined);
        }
    })
    
    request.open("GET",response);
    request.send();
    
    };

//with promises  
const getToDosPromises=(response)=>{

    return new Promise((resolve,reject)=>{
        
        const request= new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
    
            if(request.readyState===4 && request.status===200){
                const data=JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState===4){
            reject("could not fetch data");
            }
        })
        
        request.open("GET",response);
        request.send();
    })

    
};

//   const getSomething = ()=>{

//    return new Promise((resolve,reject)=>{

//     //  resolve();
//      reject();
//    });
//   }

getToDosPromises("index.json").then(data=>{

    console.log("promise resolved:",data);
})
.catch(err=>{
    console.log("promise rejected:",err);
})


// //   getSomething().then(data=>{

// //     console.log(data);
// //   },(err)=>{
// //       console.log(err);
// //   })
    
// getSomething().then(data =>{

//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })
 
