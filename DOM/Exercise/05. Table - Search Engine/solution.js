function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let searchFieldElement = document.getElementById('searchField');
     let searchValue = searchFieldElement.value;
     let listElements = Array.from(document.querySelectorAll('tbody tr'));

     //clear styles from previous search
     listElements.forEach(el=>{
        el.className='';
     });

     //find matching row elements
     //modify style for matching rows

     let filteredRows = listElements.filter(el=>{
        let values = Array.from(el.children);//tr take td tags
        if (values.some(x=>x.textContent.includes(searchValue))) {
           el.className='select';
        }
     });
    
    searchFieldElement.value='';
   }
}