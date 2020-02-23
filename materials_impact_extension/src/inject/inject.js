
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Page Loaded.");
		// ----------------------------------------------------------
	}
	}, 10);
});

var materials = ["Polyester", "acrylic", "foo", "encyclopedia"];

function searchForMaterials(materials){
	for (i = 0; i < materials.length; i++) {
		var searchFor = materials[i];
		var swapWith = '<span class="foundIt">' + searchFor + '</span>';

		$("*:contains(" + searchFor + "):not(:has(*))" ).each(function(){
			var text = this.innerHTML;
			text = text.replace(searchFor, swapWith);
			this.innerHTML = text;
		});
	};
	$(".foundIt").hover(
		function(event) {
			// The mouse has entered the element, can reference the element via 'this'
		},
		function (event) {
			// The mouse has left the element, can reference the element via 'this'
		}
	);
	console.log("Spans added.");
};

searchForMaterials(materials);

