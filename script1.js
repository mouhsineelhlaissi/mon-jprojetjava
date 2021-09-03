var leiba=document.getElementById("twichia")
var menu=document.getElementById("bt");
menu.addEventListener("click",fct);
 function fct (){

var test =leiba.value;
var test1 =test.length;
console.log("the first letter",test[0]);
console.log("the final letter",test[test1-1]);
if(test1%2==0){
    
    console.log("the middle letter",test[(test1-2)/2]);
    
} else {
    console.log("the middle letter",test[(test1-1)/2]) 
}

 }

