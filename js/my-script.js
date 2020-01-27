

// get container of all the tags a user can choose from
// const checkBoxes = document.querySelector('.all-the-tags');
const allBoxes = document.querySelectorAll('input[type=checkbox]');
// add an event listener to container
Array.prototype.forEach.call(allBoxes, function(element) {
	element.addEventListener('click', toggleChecked);
})
//checkBoxes.addEventListener('click', toggleChecked);
if (allBoxes.length > 0) {
	console.log("there's stuff in here");
	console.log(allBoxes);
}
// get list of projects
const projectBlocks = document.querySelectorAll('.project-block');

// if user clicks a checkbox
function toggleChecked(event) {
	console.log("we're in.");
	for (var i = 0; i < allBoxes.length; i++) {
		console.log("in again: " + allBoxes[i].checked);
		if (allBoxes[i].checked == true) {
			console.log(allBoxes[i].id);
			// get list of corresponding projects
			const projects = document.querySelectorAll("." + allBoxes[i].id);
			// go through corresponding projects and make sure they are displayed
			for (var j = 0; j < projects.length; j++) {
				projects[j].style.display = "block";
			}
		} else if (allBoxes[i].checked == false) {
			console.log("not checked");
			console.log(allBoxes[i].id);
			projects = document.querySelectorAll("." + allBoxes[i].id);
			for (var k = 0; k < projects.length; k++) {
				projects[k].style.display = "none";
			}
		} else {
			console.log("something's wrong bitch");
		}
	}


}

// media query (phone size) and nav scrolling
var mediaQ = window.matchMedia("(max-width: 740px)");
window.onscroll = function() {navScroll(mediaQ)}
mediaQ.addListener(navScroll);
var navHeader = document.getElementById("tags");
var sticky = navHeader.offsetTop;

function navScroll(mediaQ) {
	console.log("media check bby");
	if (mediaQ.matches && (window.pageYOffset > sticky)) {
		console.log("media q matches and scroll is a go");
		navHeader.classList.add("sticky");
		navHeader.classList.remove("grid");
		console.log("class added");
	} else {
		navHeader.classList.remove("sticky");
		navHeader.classList.add("grid");
		console.log("unsticked");
	}
}
