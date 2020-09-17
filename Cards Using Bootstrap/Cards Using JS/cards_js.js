//XMLHttpRequest(AJAX call)
function getJson(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
		callback(xhr.responseText);
		}
	};
	xhr.send();
}

//calling the function_callback
getJson("data.json",function (text) {
	var d = JSON.parse(text);
	console.log(d);

});


//Implementing the code
var main = document.getElementById("main");
console.log(main);
// create h1 tag to display the name cardView
var profileCard = document.createElement("h1");
// write the text in h1 tag
profileCard.textContent = "Details of Students";
// add child to the parent
main.appendChild(profileCard);

// create card1 child1
var section = document.createElement("section");
section.setAttribute("class","Kumar");
var image = document.createElement("img");
image.src="surya.jpg";
image.alt="Profile Image";
// add child1 to the section
section.appendChild(image);