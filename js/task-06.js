const refs = {
	input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
		refs.input.classList.remove("invalid");
		refs.input.classList.add("valid");
	} else {
		refs.input.classList.remove("valid");
		refs.input.classList.add("invalid");
	}
}
