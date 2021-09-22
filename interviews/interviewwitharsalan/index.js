var inputText=document.querySelector("#input-text");
var outputText=document.querySelector("#output-text");
var headingBtn=document.querySelectorAll(".heading-btn");
var fetchBtn=document.querySelector("#fetch-api");

var urlLink='https://api.funtranslations.com/translate/hodor.json'

function headingOne(){
    
    outputText.innerHTML=`${inputText.value}`
}

function headingTwo(){
    
    outputText.innerHTML=`${inputText.value}</h2>`
}

function headingThree(){
    
    outputText.innerHTML=`${inputText.value}</h3>`
}

function fetchApi(){
    
   console.log(outputText.value)
    var link=urlLink+"?"+"text="+outputText.value;
    fetch(link)
    .then(response=>response.json())
    .then(data=>{
        
        console.log(data);
    
        var fetchOutput=data.contents.translated;
        console.log(fetchOutput);
        outputText.innerHTML=data.contents.translated;
    })

}

headingBtn[0].addEventListener("click", headingOne);
headingBtn[1].addEventListener("click", headingTwo);
headingBtn[2].addEventListener("click", headingThree);
fetchBtn.addEventListener("click", fetchApi);
