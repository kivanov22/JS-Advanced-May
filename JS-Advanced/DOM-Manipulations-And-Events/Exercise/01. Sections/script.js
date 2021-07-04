function create(words) {
 //take content 
   let contentDiv = document.getElementById('content');

   //iterrate through words array
   for (let i = 0; i < words.length; i++) {
      //create both elements
     let div = document.createElement('div');
     let p = document.createElement('p');

     //set string to p element and make it invisible
     p.textContent=words[i];
     p.style.display='none';

     //attach p to div element
     div.appendChild(p);

      //add eventListener to div on click
      div.addEventListener('click', showParagraph);
      contentDiv.appendChild(div);
   }
  //function called by div eventListener to display sections
   function showParagraph(e){
      let innerP = e.target.children[0];
      innerP.style.display='block';
   }
 

}