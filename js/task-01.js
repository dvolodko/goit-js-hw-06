// task 1
const navEl = document.querySelector("#categories");
const navItemEl = navEl.children;
console.log("Number of categories: ", navItemEl.length);

// task 2
for (let item of navItemEl) {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${item.lastElementChild.children.length}`);
}
