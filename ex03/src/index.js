//write code below this line
 var myGlobalVariable = 10;
 
 function function1(){
       notGlobalVariable = 5; 
 }

//write code above this line

function function2(){
     var result = "";
     if (typeof myGlobalVariable != "undefined"){
         result += " notGlobalVariable: " + notGlobalVariable;
     }
     console.log(result);
    
}
function1();
function2();