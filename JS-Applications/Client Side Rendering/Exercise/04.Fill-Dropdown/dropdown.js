import { render } from "../node_modules/lit-html/lit-html.js";
import { allOptionsTemplate, optionTemplate } from "./templates/cityTemplate.js";

let meneSelect = document.getElementById('menu');

let form = document.getElementById('option-form');
form.addEventListener('submit', addItem);

let submitButton = document.getElementById('submit');
submitButton.disabled=true;

loadAllOptions();

let optionsMenu = [];

async function loadAllOptions() {

    let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    let response = await fetch(url);
    let data = await response.json();

    optionsMenu = Object.values(data);//.map({ text, id });
    console.log(optionsMenu);
   
    render(allOptionsTemplate(optionsMenu), meneSelect);
    submitButton.disabled=false;
}

async function addItem(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);


    let newOption = { text: formData.get('text') };

    let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    let postItemResponse = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'Post',
        body: JSON.stringify(newOption)
    });

    if (postItemResponse.status === 200) {
        let result = await postItemResponse.json();
        optionsMenu.push(result);
        render(allOptionsTemplate(optionsMenu), meneSelect);
    }

    form.reset();
}