
//fetch provide error to network errors only. 
// fetch("index.json")
// .then((data)=>{
//   console.log("resolved",data);
//   return data.json();
// })
// .then(json=>{
//     console.log(json);
// })
// .catch(err=>{
//    console.log("rejected",err);
// })


const getToDos= async()=>{

    const response=await fetch("indexx.json");
    if(response.status!==200){
        throw new Error("cant fetch the data");
    }
    console.log(response);
    const data= await response.json();
    return data;

}

getToDos()
.then(data=>console.log(data))
.catch(err=>console.log("rejected "+ err.message));