import { html } from "../../node_modules/lit-html/lit-html.js";


let singleBookTemplate = (book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${book._id}>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </td>
</tr>`;


let tableTemplate = (table) => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody @click=${e => onBtnClick(e, table)}>
        ${table.list.map(singleBookTemplate)}
    </tbody>`;

let createFormTemplate = () => html`
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

let editFormTemplate = (book) => html`
<form id="edit-form">
    <input type="hidden" name="_id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>`;

let loadBooksNav = (table, bookToEdit) => html`
<button @click=${table.load} id="loadBooks">LOAD ALL BOOKS</button>
${tableTemplate(table)}
${bookToEdit ? editFormTemplate(bookToEdit) : createFormTemplate()}`;

function onBtnClick(e ,table){
    if(e.target.classList.contains('editBtn')){
        const id = e.target.parentNode.dataset.id;
        table.onEdit(id);
    }else if(e.target.classList.contains('deleteBtn')){
        const id = e.target.parentNode.dataset.id;
        table.onDelete(id);
    }
}

export {loadBooksNav};