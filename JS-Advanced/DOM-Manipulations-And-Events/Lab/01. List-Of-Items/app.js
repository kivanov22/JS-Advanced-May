function addItem() {
    let newItemElement = document.getElementById('newItemText');//field for new element
    let listItems = document.getElementById('items');//list of items
    
    let liElement = document.createElement('li');//create new Li element
    liElement.textContent =newItemElement.value;//take new element and add to the new li element newText
    listItems.appendChild(liElement);//to listItems we add the new li element
    
}
