function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let divExtraElement = document.getElementById('extra');

    if (buttonElement.textContent=='More') {
    divExtraElement.style.display='block';
     buttonElement.textContent='Less';
    }
    else if(buttonElement.textContent=='Less'){
        divExtraElement.style.display='none';
        buttonElement.textContent='More';
    }
   
}