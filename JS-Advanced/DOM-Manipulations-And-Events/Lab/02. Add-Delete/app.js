function addItem() {
  //take listItems and newItem which we gonna write
  let listItems = document.getElementById("items");
  let newItem = document.getElementById("newItemText");

  //create new li element
  let liElement = document.createElement("li");
  liElement.textContent = newItem.value;

  //Add Delete button
  let removeElement = document.createElement("a");
  // let linkText = document.createTextNode('[Delete]');
  removeElement.setAttribute("href", "#");
  removeElement.textContent = "[Delete]";

  //Event listener for deleting element
  removeElement.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });

  liElement.appendChild(removeElement);
  listItems.appendChild(liElement);
  
  //Emptying the writing field
  newItem.value = "";
}
