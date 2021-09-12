const inputText=document.querySelector(".input-text");
const checkBtn=document.querySelector(".check");
const display=document.querySelector(".display");

if(checkBtn){

    checkBtn.addEventListener("click",checkPassword);
}

function checkPassword(){

    var password=inputText.value;
    
    if(password.length<10){
        
        display.innerHTML="Minimum length of password should be 10!";
        inputText.style.backgroundColor="red";
    }
    else{
        
        var cnt=0;
        for(i=0;i<password.length;i++){

            if(password[i]!=='@'){
               continue;
            }
            else{
                cnt++;
                break;
            }
        }

        if(cnt>0){

           display.innerHTML="Password is good!";
           inputText.style.backgroundColor="green";
           
        }
        else{

            inputText.style.backgroundColor="red";
            display.innerHTML="Password should contain @";
        }


    }
}