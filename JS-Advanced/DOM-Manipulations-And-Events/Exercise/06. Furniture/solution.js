function solve() {

  //1.Select DOM elements
  let textArea = document.querySelectorAll('#exercise textarea');
  let generateText = textArea[0];
  let buyTextArea = textArea[1];

  //let parseArea = JSON.parse(textArea.value);

  let buttons = document.querySelectorAll('#exercise button');
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  //2.Add event listeners to generate button
  generateBtn.addEventListener('click', generateItems);

  function generateItems() {
    //Get text area value and Json parse
    let items = JSON.parse(generateText.value);
    let tableBody = document.querySelector('.table tbody');
    //Construct DOM elements table row to add to the table
    items.forEach(el => {
      let tr = document.createElement('tr');
      //image 
      let imageTd = document.createElement('td');
      let image = document.createElement('img');
      image.src = el.img;
      imageTd.appendChild(image);
      //name
      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = el.name;
      nameTd.appendChild(nameP);
      //price
      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = el.price;
      priceTd.appendChild(priceP);
      //deFactory
      let decFactorTd = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = el.decFactor;
      decFactorTd.appendChild(decFactorP);
      //Checkbox
      let checkBoxTd = document.createElement('td');
      let checkBoxP = document.createElement('input');
      checkBoxP.type = 'checkbox';
      checkBoxTd.appendChild(checkBoxP);


      tr.appendChild(imageTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decFactorTd);
      tr.appendChild(checkBoxTd);

      tableBody.appendChild(tr);

    });
  }
  //Buy button add eventListene
  buyBtn.addEventListener('click', calculateBoughtFurniture);


  function calculateBoughtFurniture() {
    let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    //take selected things only checked
    let selectedRows = tableRows.filter(x => x.querySelectorAll('input:checked').length>0);

    //for every row give me second td for p
    let names = selectedRows
      .map(x => x.querySelector('td:nth-of-type(2) p'))
      .map(x => x.textContent)
      .join(', ');


    let prices = selectedRows
    .map(x => x.querySelector('td:nth-of-type(3) p'))
      .map(x => Number(x.textContent));
      

    let decFactors = selectedRows
    .map(x => x.querySelector('td:nth-of-type(4) p'))
      .map(x => Number(x.textContent));
      
      let totalPrice = prices.reduce((acc,el) => acc+el,0).toFixed(2);
      let averageDecFactor = decFactors.reduce((acc,el)=>acc +el,0)/decFactors.length;

     let furnitureText = `Bought furniture: ${names}`;
     let priceText = `Total price: ${totalPrice}`;
     let decFactorText = `Average decoration factor: ${averageDecFactor}`;

     buyTextArea.textContent=`${furnitureText}\n${priceText}\n${decFactorText}`;

  }

}