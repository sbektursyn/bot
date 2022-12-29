const myText = ["Hello","How are you?","Goodbye"]
const botText = ["Hi","Good","Gbye"]
function send(){
	var sms = document.getElementById("myText").value;
	console.log(sms)

	for (var i = 0; i < myText.length; i++) {
	    if (myText[i] != sms) {
	    	document.getElementById("answer").innerHTML = "не понимае";
	    }
	}

	for (var i = 0; i < myText.length; i++) {
	    if (myText[i] == sms) {
	        let mysms = myText.indexOf(sms)
	        console.log(mysms)

	        console.log(botText[mysms])

	        document.getElementById("answer").innerHTML = botText[mysms];
	    } 
	}
}

