var leiba=document.getElementById("twichia")
var menu=document.getElementById("bt");
menu.addEventListener("click",fct);
 function fct (){

var test =leiba.value;
var test1 =test.length;
var x=test[0]+test[1]+test[2];
var y=test[3]+test[4];
var z;
z=Number(x) +Number(y);
console.log(z);

if(Number(leiba.value)==NaN){
    console.log(test[0,1,2]+test[3,4]);
}else{
    alert("its not a number");
}
}

