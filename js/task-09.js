const refs = {
	button: document.querySelector(".change-color"),
	colorDisplay: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
	refs.colorDisplay.textContent = getRandomHexColor();
	document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
