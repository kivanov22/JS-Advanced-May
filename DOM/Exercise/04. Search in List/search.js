function search() {
  let allLiElements = Array.from(document.querySelectorAll("#towns li"));
  let searchBox = document.getElementById("searchText");
  
  
  let searchBoxElement = searchBox.value;

  allLiElements.forEach(el=>{
      el.style.fontWeight = "normal";
    el.style.textDecoration = "none"; 
  });
  
  

  let filterLi = allLiElements
    .filter(x => x.textContent.includes(searchBoxElement));

  let mappedLi =filterLi.forEach(x=>{
      x.style.fontWeight = "bold";
      x.style.textDecoration = "underline";
      });
        
     
   let resultElements = document.getElementById("result");

 
  resultElements.textContent = `${filterLi.length} matches found`;
  //searchBox.textContent = "";
}
