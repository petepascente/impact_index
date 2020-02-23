//Read these in from firebase?
var materials = ["polyester", "acrylic", "foo", "encyclopedia"];

function searchForMaterials(materials){
	//For each material...
	for (i = 0; i < materials.length; i++) {
		//Replace with Anna's inside?
		var content = fillContent("Material", "D", "High", "High", "Low", "High", "description");
		
		// Set current material to add spans to
		var searchFor = materials[i];
		var capitalized = captize(searchFor);
		
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

function captize(capThis){
	return (capThis.charAt(0).toUpperCase() + capThis.slice(1));
};

function fillContent(mat, grade, fuelUse, emissions, waterUse, eutroph, description){
	var cont = document.createElement("div");
	cont.id = "infoBox";

	var headB = document.createElement("span");
	headB.id = "head";
	headB.innerHTML = "&nbsp; " + mat;

	var sidewaysB = document.createElement("span");
	sidewaysB.id = "sidewayyyz";
	sidewaysB.innerHTML = "&nbsp; &nbsp; <b> SUSTAINABILITY GRADE </b>";

	var bigGradeB = document.createElement("span");
	bigGradeB.id = "bigGrade";
	bigGradeB.innerHTML = "<b> " + grade + "</b>";
	
	// ----

	var iconOneB = document.createElement("span");
	iconOneB.id = "iconOne";
	iconOneB.innerHTML = "<i class='fas fa-gas-pump'></i>";

	var ratingOneB = document.createElement("span");
	ratingOneB.id = "ratingOne";
	ratingOneB.innerHTML = "<b>" + fuelUse + "</b> Fossil Fuel Use";

	var iconTwoB = document.createElement("span");
	iconTwoB.id = "iconTwo";
	iconTwoB.innerHTML = "<i class='fas fa-cloud'></i> ";

	var ratingTwoB = document.createElement("span");
	ratingTwoB.id = "ratingTwo";
	ratingTwoB.innerHTML = "<b>" + emissions + "</b> CO2 Emissions";

	var iconThreeB = document.createElement("span");
	iconThreeB.id = "iconThree";
	iconThreeB.innerHTML = "<i class='fas fa-tint'></i>";

	var ratingThreeB = document.createElement("span");
	ratingThreeB.id = "ratingThree";
	ratingThreeB.innerHTML = "<b>" + waterUse + "</b> Water Use";

	var iconFourB = document.createElement("span");
	iconFourB.id = "iconFour";
	iconFourB.innerHTML = "<i class='fas fa-water'></i>";

	var ratingFourB = document.createElement("span");
	ratingFourB.id = "ratingFour";
	ratingFourB.innerHTML = "<b>" + eutroph + "</b> Eutrophication";

	// ---

	var descriptionB = document.createElement("span");
	descriptionB.id = "descript";
	descriptionB.innerHTML = description;

	cont.appendChild(headB);
	cont.appendChild(sidewaysB);
	cont.appendChild(bigGradeB);
	cont.appendChild(iconOneB);
	cont.appendChild(ratingOneB);
	cont.appendChild(iconTwoB);
	cont.appendChild(ratingTwoB);
	cont.appendChild(iconThreeB);
	cont.appendChild(ratingThreeB);
	cont.appendChild(iconFourB);
	cont.appendChild(ratingFourB);
	cont.appendChild(descriptionB);

	return cont.innerHTML;
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

