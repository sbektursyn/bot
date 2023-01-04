const input=document.querySelector("#myText"),
	  btn= document.querySelector(".btn"),
	  sms= document.querySelector(".sms"),
	  wrapper=document.querySelector(".section");
const myText = ["Hello","How are you?","Goodbye"]
const botText = ["Hi","Good","Gbye"]

function send(){
	const text = input.value;
	console.log(input);
	if(text!=""){
		sms.innerHTML +=`<div class="smswrapper"><p class="text1">${text} </p></div>`
		

		

		for (var i = 0; i < myText.length; i++) {
		    if (myText[i] == text) {
		        let mysms = myText.indexOf(text)
		        console.log(mysms)

		        console.log(botText[mysms])

		        sms.innerHTML += '<div class="botsms"><p class="btext" id="btext"></p></div>';
		        document.getElementById("btext").innerHTML = botText[mysms];
		    } else if (text != myText[i]) {
		    	sms.innerHTML += '<div class="botsms"><p class="btext">не понимае</p></div>';
		    }
		}



		input.value=''
	}
}







