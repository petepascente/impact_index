
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

var materials = ["polyester", "acrylic", "foo"];

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

function searchForMaterials(){
	for (i = 0; i < materials.length; i++) {
		if ($("*:contains('" + materials[i] + "')" ).length > 0) {
			console.log('I have found ' + materials[i]);
		};
	};
};

document.body.appendChild(button);

searchForMaterials();

console.log($("*:contains(materials[i])" ));
console.log($("*:contains(materials[i])" ).size);
console.log($("*:contains(materials[i])" ).length);


