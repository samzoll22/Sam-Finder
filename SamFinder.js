/*jshint multistr:true */

var text = "Hello my name is Sam. Sam really want to go visit Maya! Sam will be very happy when he finds Maya!";
var myName = "Sam";
var hits = [];

for(var i = 0; i < text.length; i ++){
    if(text[i] === "S"){
        for(var j = i; j < (myName.length + i); j ++){
            hits.push(text[j]);
        }
    }
}

if(hits.length === 0){
console.log("Your name wasn't found!");
}else{console.log(hits);
}
   
