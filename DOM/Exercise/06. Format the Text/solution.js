function solve() {
 let textArea = document.getElementById('input');

 let text = textArea.value;
//split text by '.' to get sentences
 let sentences = text.split('.').filter(x=>x !=='').map(x=> x + '.');

 //group sentences by 3 in paragraphs 

 let paragraphRoof = Math.ceil(sentences.length/3);

 //insert paragraphs into DOM

 let resultDiv = document.getElementById('output');
  
 for (let i = 0; i < paragraphRoof; i++) {
   resultDiv.innerHTML+=(`<p>${sentences.splice(0,3).join('')}</p>`);
 
  }
 }

