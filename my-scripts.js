function Item(text, state="none") {
	this.text = text;
	this.state = state;
	this.clicked = function(){
		this.state = (this.state == "none") ? "strike" : "invisible";
	}
}

items = (JSON.parse(localStorage.getItem("items")) || []).map(x => new Item(x.text, x.state));

function printItem(item) {
	p = document.createElement("p");
	p.innerHTML = item.text;
	p.classList.add(item.state);
	p.addEventListener("click", function (element) {
		item.clicked()
		localStorage.setItem("items", JSON.stringify(items));
		element.target.classList.add(item.state);
	})
	document.getElementById("list").appendChild(p);
}
for (let i=0; i < items.length; i++) {printItem(items[i]);}
 
function createItem() {
	newItem = new Item(prompt("Your new item prompt goes here"));
	items.push(newItem);
	localStorage.setItem("items", JSON.stringify(items));
	printItem(newItem);
}
