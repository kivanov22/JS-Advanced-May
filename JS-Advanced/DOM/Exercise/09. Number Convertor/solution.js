function solve() {
 let button = document.querySelector('button').addEventListener('click',onClick);
 let selectTo = document.querySelector('#selectMenuTo');

let valueBinary = document.createElement('option');
valueBinary.textContent='Binary';
valueBinary.value='binary';

let valueHexadecimal = document.createElement('option');
valueHexadecimal.textContent='Hexadecimal';
valueHexadecimal.value='hexadecimal';


selectTo.appendChild(valueBinary);
selectTo.appendChild(valueHexadecimal);



 function onClick(){
     let numberBox = Number(document.getElementById('input').value);


     if(selectTo.value==='binary'){
    document.querySelector('footer input').value = numberBox.toString(2);
     }else{
         document.querySelector('footer input').value=numberBox.toString(16).toUpperCase();
     }
 }

}