
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//console.log("Hello. This message was sent from scripts/inject.js");
		
		var searchFor = 'Emu';
		
		var swapWith = '<span class="foundIt">' + searchFor + '</span>';

		$("*:contains(" + searchFor + "):not(:has(*))" ).each(function(){
			var text = this.innerHTML;
			text = text.replace(searchFor, swapWith);
			this.innerHTML = text;
		});

		$(".foundIt").hover(
			function(event) {
				// The mouse has entered the element, can reference the element via 'this'
			},
			function (event) {
				// The mouse has left the element, can reference the element via 'this'
			}
		);
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

function doThis(){
	if (document.body.textContent.search("effectively") > 0) {
    console.log('yeah baby');
	};
};

document.body.appendChild(button);


