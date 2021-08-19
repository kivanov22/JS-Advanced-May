window.addEventListener('load', solve);

function solve() {

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addFurniture);


    function addFurniture(e) {
        e.preventDefault();

        let furnitureList = document.getElementById('furniture-list');
        let information = document.getElementById('information');
        let model = document.getElementById('model');
        let year = document.getElementById('year');
        let description = document.getElementById('description');
        let price = document.getElementById('price');

        let yearNumber = Number(year.value);
        let priceNumber = Number(price.value).toFixed(2);

        if (model.value === '' || description === '' || !yearNumber || !priceNumber || priceNumber < 0 || yearNumber < 0) {//??
            return;
        }

        let trClassInfo = document.createElement('tr');
        trClassInfo.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = model.value;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = priceNumber;
        

        let tdButtons = document.createElement('td');

        let buttonMoreInfo = document.createElement('button');
        buttonMoreInfo.textContent = 'More Info';
        buttonMoreInfo.classList.add('moreBtn');
        buttonMoreInfo.addEventListener('click', showMoreInfo);

        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy it';
        buyButton.classList.add('buyBtn');
        buyButton.addEventListener('click', buyFurniture);

        let trHide = document.createElement('tr');
        trHide.classList.add('hide');

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearNumber}`;

        let tdDescription = document.createElement('td');
        tdDescription.textContent = `Description: ${description.value}`;
        tdDescription.setAttribute('colspan', 3);

        tdButtons.appendChild(buttonMoreInfo);
        tdButtons.appendChild(buyButton);
        trClassInfo.appendChild(tdModel);
        trClassInfo.appendChild(tdPrice);
        trClassInfo.appendChild(tdButtons);

        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);

        furnitureList.appendChild(trClassInfo);
        furnitureList.appendChild(trHide);




        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';


        function showMoreInfo(e) {
            let button = e.currentTarget;

            if (button.textContent === 'More Info') {
                button.textContent = 'Less Info';
                trHide.style.display = 'contents';
            } else {
                button.textContent = 'More Info';
                trHide.style.display = 'none';
            }
            // button.textContent = button.textContent ? 'Less Info' : 'More Info';
            // trHide.style.display = trHide.style.display ? 'contents' : 'none';

        }

        function buyFurniture(e) {
            let currentFurniture = e.currentTarget.parentNode.parentNode;
            //let furniture = e.currentTarget.parentNode.parentNode;

           let takePrice = currentFurniture.querySelectorAll('td');
           let price = takePrice[1].textContent;
            //querySelectorAll('td:nth-of-type(2)');
            //let price = takePrice.textContent;//textContent

            currentFurniture.remove();
            let totalPrice = document.querySelector('.total-price');
            totalPrice.textContent = '';
            totalPrice.textContent = price;//+=priceNumber


        }
    }
}
