const refs = {
	inputRange: document.querySelector("#font-size-control"),
	text: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", onInputChange);

function onInputChange(event) {
	refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
