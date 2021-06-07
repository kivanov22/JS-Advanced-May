function addItem() {
    let newItemElement = document.getElementById('newItemText');
    let listItemsToAdd=document.getElementById('Items');
    listItemsToAdd.appendChild(newItemElement);
}