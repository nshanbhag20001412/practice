var outputText = document.querySelector(".output")
var api = "https://api.funtranslations.com/translate/yoda.json";



// fetch(api)
// .then(response=> response.json())
// .then(response => {
//     if (response.status === 200){
//         outputText.innerText = "success";
//     }else{
//         outputText.innerText = response.error.message;
//         ;
//     }
// }
// )

function errorhandling(error){

    outputText.innerText=error;
};

fetch(api)
.then(response=> response.json())
.then(response => {

    if(!response.ok){

        throw response.error.message

    }
    else
    outputText.innerText="Sucess";

})
.then(data=>{console.log(data)})
.catch( error=> errorhandling(error))





