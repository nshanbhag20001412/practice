var btnOne=document.querySelector(".btn-one");
var btnTwo=document.querySelector(".btn-two")
// for querySelectorAll
var btn=document.querySelectorAll(".btn")
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

// using querySelectorAll
btn.forEach(btn=>{
    btn.addEventListener("click",callApi)
})

// using querySelector
btnOne.addEventListener('click',callApi)
btnTwo.addEventListener('click',callApi)