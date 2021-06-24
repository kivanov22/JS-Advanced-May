function solve() {

   //let state = {};
      let oldState = [];//empty array so we can sort titles
      
   document.querySelector('.btn').addEventListener('click', (e) => {

      e.preventDefault();

      let main = document.querySelector('main > section');//here we put everything

      let authorNameBox = document.getElementById('creator');
      let titleNameBox = document.getElementById('title');
      let categoryNameBox = document.getElementById('category');
      let contentTextBox = document.getElementById('content');

      const article = el('article');//create article
      const h1 = el('h1', titleNameBox.value);//Java Script title

      const p = el('p', 'Category:  ');
      const strong = el('strong', categoryNameBox.value);
      p.appendChild(strong);

      const p2 = el('p', 'Creator:  ');
      const strong2 = el('strong', authorNameBox.value);
      p2.appendChild(strong2);

      const p3 = el('p', contentTextBox.value);//?? textContent
      const div = el('div', undefined, 'buttons');

      const delBtn = el('button', 'Delete', 'btn delete');
      const archiveBtn = el('button', 'Archive', 'btn archive');

      delBtn.addEventListener('click', del);
      archiveBtn.addEventListener('click', archive);
      div.appendChild(delBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);
      main.appendChild(article);

      authorNameBox.value='';
      titleNameBox.value='';
      categoryNameBox.value='';
      contentTextBox.value='';


   });

   function del(e) {
      e.target.parentNode.parentNode.remove();//remove div and article
   }

   function archive(e) {//select from post not create new
      let section = e.target.parentNode.parentNode;//article
      //const textToAppend = section.querySelector('h1').textContent; either this or below
      section.parentNode.removeChild(section);

      let title = section.querySelector('h1');
      const ol = document.querySelector('ol');

      ol.textContent='';//innerHTML

      
      oldState.push(title.textContent);//push to the array the titles

      //sort titles and for every title create li element and append to ol
      oldState.sort((a,b)=> a.localeCompare(b)).forEach((element)=>{
         let li = el('li',element);
         ol.appendChild(li);
      });

      section.remove();
   }

   function el(type, content, addClass) {
      const result = document.createElement(type);
      result.textContent = content;

      if (addClass) {//if there is a class for example Button
         result.className = addClass;
      }

      return result;
   }

}
