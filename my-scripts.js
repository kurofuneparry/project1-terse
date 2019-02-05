items = (JSON.parse(localStorage.getItem("items")) || []);

function printItem(item) {
	p = document.createElement("p");
	p.innerHTML = item.text;
	p.classList.add(item.state);
	p.addEventListener("click", function (element) {
		item.state = (this.state=="none") ? "strike" : "invisible";
		localStorage.setItem("items", JSON.stringify(items));
		element.target.classList.add(item.state);
	})
	document.getElementById("list").appendChild(p);
}
for (let i=0; i < items.length; i++) {printItem(items[i]);}
 
function createItem() {
	newItem = {text:prompt("Your new item prompt goes here"), style:"none"};
	items.push(newItem);
	localStorage.setItem("items", JSON.stringify(items));
	printItem(newItem);
}
