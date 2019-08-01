let designs = document.getElementsByClassName("design");
let audio = document.getElementsByClassName("audio");

function toggleChecked(event) {
	console.log(event.target.checked);
}

const checkBoxes = document.querySelector('.all-the-tags');
checkBoxes.addEventListener('click', toggleChecked);

function checked() {
	for (var i = 0; i < designs.length; i++) {

		designs[i].style.display = "block";
	}
	for (var i = 0; i < audio.length; i++) {
		audio[i].style.display = "none";
	}
}

function unchecked() {
	for (var i = 0; i < designs.length; i++) {
		designs[i].style.display = "none";
	}
	for (var i = 0; i < audio.length; i++) {
		audio[i].style.display = "block";
	}
}