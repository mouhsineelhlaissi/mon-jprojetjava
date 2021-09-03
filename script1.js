var leiba=document.getElementById("twichia")
var menu=document.getElementById("bt");
menu.addEventListener("click",fct);
 function fct (){

var test =leiba.value
var test1 =test.length;
if(test1%2==0){
for(let i = 0; i < test1/2 ; i++){
console.log(test[i])
}
}else{
    for(let i = 0; i < (test1+1)/2 ; i++){
        console.log(test[i])

}
}
 }
