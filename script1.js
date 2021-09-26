var leiba=document.getElementById("name");
var leiba1=document.getElementById("pass");
var menu=document.getElementById("bt");
var text=document.getElementById("login");

menu.addEventListener("click",fct);
 function fct (){
     if(leiba=="hatim" && leiba1=="12345"){
        
      text.innerHTML= "welcome hatim"; 
     }else{
        text.innerHTML= "eroor";  
     }

     

} 



