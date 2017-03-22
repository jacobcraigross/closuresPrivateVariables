var body = document.querySelector("body");  
var isRed = false;

setInterval(function(){  
	if (isRed) {
		body.style.background = "white";
	} else {
		body.style.background = "#EE2C2C";
	}
	isRed = !isRed;
}, 1000);