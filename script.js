var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var del = document.getElementsByClassName("delete");
var h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", title);

function title() {
	h1.classList.toggle("coolTitle");
}

for (var i = 0; i < del.length; i++) {
	del[i].addEventListener("click", eraseLi);
}
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", linethrough)
}

function eraseLi(event) {
	var parent = event.target.parentElement;
		parent.remove();
}
function linethrough(event) {
	var a = event.target;
	a.classList.toggle("done");
}
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.addEventListener("click", eraseLi);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// not sure if next line is necessary
	li.innerHTML = li.innerHTML + " ";
	// works without it
	li.appendChild(btn);
	li.addEventListener("click", linethrough);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
// .remove(); *new* to remove elements