const refs = {
	buttonCreate: document.querySelector("button[data-create]"),
	buttonDestroy: document.querySelector("button[data-destroy]"),
	getANumber: document.querySelector("div > input"),
	sandbox: document.querySelector("div#boxes"),
};

refs.buttonCreate.addEventListener("click", onCreateButtonClick);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateButtonClick() {
	createBoxes(refs.getANumber.value);
}

function createBoxes(amount) {
	let height = 30;
	let width = 30;
	const boxPack = [];
	for (let i = 0; i < amount; i += 1) {
		const box = document.createElement("div");
		box.style.width = `${width + i * 10}px`;
		box.style.height = `${height + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxPack.push(box);
	}
	refs.sandbox.append(...boxPack);
}

function destroyBoxes() {
	refs.sandbox.innerHTML = "";
}
