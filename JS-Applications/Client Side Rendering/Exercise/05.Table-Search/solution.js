import { render, html } from "../node_modules/lit-html/lit-html.js";



let tableTemplate = (user,select) => html`
<tr class=${select ? 'select' : ''}>
   <td>${user.firstName}${user.lastName}</td>
   <td>${user.email}</td>
   <td>${user.course}</td>
</tr>`;




let tbody = document.querySelector('tbody');
let searchField = document.getElementById('searchField');

loadTable();

async function loadTable() {
   document.getElementById('searchBtn').addEventListener('click', () => {
      update(list, searchField.value);
   });


   let url = 'http://localhost:3030/jsonstore/advanced/table';
   let response = await fetch(url);
   let data = await response.json();
   let list = Object.values(data);
   update(list);

}

function update(list, match) {
   const result = list.map(e => tableTemplate(e, compare(e, match)));
   render(result, tbody);
}

function compare(row, match) {
   return Object.values(row).some(v => match && v.toLowerCase().includes(match.toLowerCase()));
}