chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

var button = document.createElement("button");
button.className = "dankAssButton";
button.innerHTML = "Hella";

function makeBiggah(){
	console.log(button.classList);
	button.classList.add("bigButt");
}

function makeSmallah(){
	button.className = "dankAssButton";
}

button.addEventListener("mouesover", makeBiggah);
button.addEventListener("mouseout", makeSmallah);

document.body.appendChild(button);