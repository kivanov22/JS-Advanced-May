import {html} from "../../node_modules/lit-html/lit-html.js";

export let optionTemplate = (item) => html`<option .value =${item._id}>${item.text}</option>`; 

export let allOptionsTemplate = (items)=>html`${items.map(o=>optionTemplate(o))}`;