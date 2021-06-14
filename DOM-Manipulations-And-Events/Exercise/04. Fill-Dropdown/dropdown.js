function addItem() {
   let newItemText = document.getElementById('newItemText');
   let newItemValue =document.getElementById('newItemValue');

   let createOptionElement = document.createElement('option');
   createOptionElement.value =newItemValue.value;
   createOptionElement.textContent=newItemText.value;

   let selectItem = document.getElementById('menu');
   selectItem.appendChild(createOptionElement);

   newItemText.value='';
   newItemValue.value='';

}