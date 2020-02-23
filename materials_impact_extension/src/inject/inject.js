//Read these in from firebase?
var materials = ["polyester", "acrylic", "foo", "encyclopedia"];

function searchForMaterials(materials){
	//For each material...
	for (i = 0; i < materials.length; i++) {
		//Replace with Anna's inside?
		var content = " Hi There! "; 
		
		// Set current material to add spans to
		var searchFor = materials[i];
		var capitalized = searchFor.charAt(0).toUpperCase() + searchFor.slice(1);
		
		//What to swap in:
		var swapWithL = '<div class="tooltip">' + searchFor + '<span class="tooltiptext">' + content + '</span> </div>';
		var swapWithU = '<div class="tooltip">' + capitalized + '<span class="tooltiptext">' + content + '</span> </div>';

		//Set regex to search for
		var regSearchFor = new RegExp('>[^<{}]{0,}(' + searchFor + ')+[^s]{1,}[^>]{0,}<', 'ig');
		var reg2L = new RegExp('(' + searchFor + ')', 'g');
		var reg2U = new RegExp('(' + capitalized + ')', 'g');
		
		//Get a string of the innerHTML of the body
		var theBody = document.body.innerHTML; 

		//Make the swap
		theBody = theBody.replace(regSearchFor, function(matched){
			//console.log(matched);
			
			var lowerCased = matched.replace(reg2L, swapWithL);
			var upperCased = lowerCased.replace(reg2U, swapWithU);
			
			return upperCased;
		
		});
		
		//Set body to the swapped HTML
		document.body.innerHTML = theBody;
	};
	console.log("Spans added.");
};

var loadfunction = window.onload;
window.onload = function(event){
    //enter here the action you want to do once loaded
	searchForMaterials(materials);
    if(loadfunction) loadfunction(event);
}

$(".toolTip").hover(
	function(event) {
		// The mouse has entered the element, can reference the element via 'this'
		console.log("Touched");
	},
	function (event) {
		// The mouse has left the element, can reference the element via 'this'
		console.log("Nope");
	}
);

