var text = "Hello my name is Sam. Sam really want to go visit Maya! Sam will be very happy when he finds Maya!";
var myName = "Sam";
var hits = [];

var samPusher = function (){ 
	for(var i = 0; i < text.length; i ++) {
    	if(text[i] === "S"){
    		 hits.push(text.slice(i,i+myName.length));
			} 
		}	
		if (hits.length === 0) {
			return "Your name wasn't found!";
		} else {
			return "The name \'" + myName + "\', was found " + hits.length + " times in the sentence.";
		}
	
}
samPusher();

