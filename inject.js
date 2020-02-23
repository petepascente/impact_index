
function initApp() {
    chrome.runtime.sendMessage({start: true}, function(response) {
      searchForMaterials(response.data)
    });
}

function searchForMaterials(materials){
	//For each material...
	for (i = 0; i < materials.length; i++) {


		// Set current material to add spans to
		var searchFor = materials[i]["name"];
    var dataObject = materials[i]["data"];
    console.log(dataObject);
		var capitalized = captize(searchFor);

    //Replace with Anna's inside
    var content = fillContent(materials[i]["name"], materials[i]["data"]["grade"], materials[i]["data"]["ffu"], materials[i]["data"]["emissions"], materials[i]["data"]["wrd"], materials[i]["data"]["eutro"], materials[i]["data"]["descript"]);

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

function getWord(number){
	switch(number) {
		case 0:
		  	return "LOW";
		  	break;
		case 1:
		  	return "MID";
		  	break;
		case 2:
		  	return "HIGH";
			break;
		default:
		  // code block
	  }
}

function getColor(number){
	switch(number) {
		case 0:
		  	return "GREEN";
		  	break;
		case 1:
		  	return "YELLOW";
		  	break;
		case 2:
		  	return "RED";
			break;
		default:
		  // code block
	  }
}

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
	iconOneB.style.color = getColor(fuelUse);
	iconOneB.innerHTML = "<i class='fas fa-gas-pump'></i>";

	var ratingOneB = document.createElement("span");
	ratingOneB.id = "ratingOne";
	ratingOneB.innerHTML = "<b>" + getWord(fuelUse) + "</b> Fossil Fuel Use";

	var iconTwoB = document.createElement("span");
	iconTwoB.id = "iconTwo";
	iconTwoB.style.color = getColor(emissions);
	iconTwoB.innerHTML = "<i class='fas fa-cloud'></i> ";

	var ratingTwoB = document.createElement("span");
	ratingTwoB.id = "ratingTwo";
	ratingTwoB.innerHTML = "<b>" + getWord(emissions) + "</b> CO2 Emissions";

	var iconThreeB = document.createElement("span");
	iconThreeB.id = "iconThree";
	iconThreeB.style.color = getColor(waterUse);
	iconThreeB.innerHTML = "<i class='fas fa-tint'></i>";

	var ratingThreeB = document.createElement("span");
	ratingThreeB.id = "ratingThree";
	ratingThreeB.innerHTML = "<b>" + getWord(waterUse) + "</b> Water Use";

	var iconFourB = document.createElement("span");
	iconFourB.id = "iconFour";
	iconFourB.style.color = getColor(eutroph);
	iconFourB.innerHTML = "<i class='fas fa-water'></i>";

	var ratingFourB = document.createElement("span");
	ratingFourB.id = "ratingFour";
	ratingFourB.innerHTML = "<b>" + getWord(eutroph) + "</b> Eutrophication";

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

window.onload = function() {
  initApp();
};
