var btnOne=document.querySelector(".btn-one");
var btnTwo=document.querySelector(".btn-two")
var outputText=document.querySelector(".output-text");
var api="https://mock-practice.prakhar10v.repl.co/bollywood?name="


function callApi(){

    var fetchApi=api+this.innerText;

    fetch(fetchApi)
    .then(response=>response.json())
    .then(data=>{
        outputText.innerHTML=data.message;
    })
}
btnOne.addEventListener('click',callApi)
btnTwo.addEventListener('click',callApi)