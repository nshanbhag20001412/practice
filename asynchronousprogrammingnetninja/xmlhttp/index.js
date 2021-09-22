
const getToDos=(callBack)=>{
const request= new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{

    // console.log(request,request.readyState);

    if(request.readyState===4 && request.status===200){
        // console.log(request,request.responseText);
        callBack(undefined,request.responseText);
    }
    else if(request.readyState===4){
    //   console.log('couldnt fetch data');
    callBack("could not fetch data",undefined);
    }
})

request.open("GET",'https://api.funtranslations.com/translate/yoda.json?text=neha');
request.send();

};

console.log(1);
console.log(2);
getToDos((err,data)=>{

    console.log("callback fired");
    if(err)
    console.log(err);
    else
    console.log(data);
});

console.log(3);
console.log(4);
