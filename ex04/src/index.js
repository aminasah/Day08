//write code below this line
function localScope(){
    var myVariable="I am here!";
}

//write code above this line
localScope();

if(typeof myVariable!="undefined"){
    console.log('outside localScope', myVariable)
}
else{
    console.log('outside localScope UNDEFINED!!!')
}

module.exports=localScope;