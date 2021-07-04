function lockedProfile() {
  
   //let buttons = document.querySelectorAll('#main .profile button');//for first way

    let buttonElements = Array.from(document.querySelectorAll('#main .profile button'));//second way
     //Second way for this task
    buttonElements.forEach(el=>{
        el.addEventListener('click',toggleButton);
    })
     
    function toggleButton(e){
    let button = e.target;
    let profile = button.parentElement;
    let radioButton = profile.querySelector(`input:checked`);
    
    if (radioButton.value ==='unlock') {
        let hiddenFieldElement=button.previousElementSibling;
        hiddenFieldElement.style.display=hiddenFieldElement.style.display==='block'
        ? 'none'
        : 'block';

        button.textContent = button.textContent === 'Show more'
        ? 'Hide it'
        : 'Show more';
    }
    }

   //First way for this task
//   for (let i = 0; i < buttons.length; i++) {
//       buttons[i].addEventListener('click',()=>{

//       let radioButton = document.querySelector(`input[name='user${i+1}Locked']:checked`);
      
//       if (radioButton.value==='unlock') {
        
//       let hiddenFieldElement =document.getElementById(`user${i+1}HiddenFields`);

//       hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block' 
//       ? 'none'
//       : 'block';
//       buttons[i].textContent= buttons[i].textContent==='Show more' 
//       ? 'Hide it'
//       : 'Show more';
//        }
//     });
//   }
}