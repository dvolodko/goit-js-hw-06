const counter = {
	value: 0,
	increment() {
		this.value += 1;
	},
	decrement() {
		this.value -= 1;
	},
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
	counter.increment();
	valueEl.textContent = counter.value;
});

decrementBtn.addEventListener("click", function () {
	counter.decrement();
	valueEl.textContent = counter.value;
});
