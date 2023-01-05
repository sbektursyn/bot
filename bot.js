const input=document.querySelector("#myText"),
	  btn= document.querySelector(".btn"),
	  sms= document.querySelector(".sms"),
	  wrapper=document.querySelector(".section");
const myText = ["Hello","How are you?","Goodbye"]
const botText = ["Hi","Good You?","Gbye"]


input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
    	document.getElementById("btn").click();
	}
});

function send(){
	const text = input.value;
	console.log(text);
	if(text!=""){
		sms.innerHTML +=`<div class="smswrapper"><p class="text1">${text} </p></div>`
		

		

		for (var i = 0; i < myText.length; i++) {
			if (myText[i] == text) {
		        let mysms = myText.indexOf(text)
		        console.log(mysms)

		        console.log(botText[mysms])


		        sms.innerHTML += `<div class="botsms"><p class="btext"> ${botText[mysms]} </p></div>`;
		        input.value=''
		        return
		    } 
		    if (myText[0] != text){
		    	if (myText[1] != text){
		    		if (myText[2] != text){
		    			sms.innerHTML += '<div class="botsms"><p class="btext">не понимае</p></div>';
		    			input.value=''
		    			return
		    		}
		    	}
		    }
		}


		
		
		
	}
}









