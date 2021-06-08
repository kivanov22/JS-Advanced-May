function focused() {
  let sectionFocus = document.getElementsByTagName('input');

  for (const element of sectionFocus) {
    element.addEventListener('focus', focusEvent);
    element.addEventListener('blur', unfocusEvent);
  }
  function focusEvent(e){
  e.target.parentNode.className='focused';
    

 }
 function unfocusEvent(e){
     e.target.parentNode.className='';
 }
}

