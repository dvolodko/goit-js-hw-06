const refs = {
	button: document.querySelector(".change-color"),
	colorDisplay: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
	const randomColor = getRandomHexColor();
	refs.colorDisplay.textContent = randomColor;
	document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
