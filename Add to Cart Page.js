let inputEl = document.getElementById("cartItemTextInput");
let cartItemsContainer = document.getElementById("cartItemsContainer");



function addFun() {
    let text = inputEl.value;
    let listItems = document.createElement("li");
    listItems.classList.add("listItemsStyle");
    listItems.textContent = text;

    inputEl.value = "";
    cartItemsContainer.appendChild(listItems);

}