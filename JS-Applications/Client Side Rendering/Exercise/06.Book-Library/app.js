import { render } from "../node_modules/lit-html/lit-html.js";
import * as api from "./helpers/jsonRequests.js";
import { loadBooksNav } from "./templates/bookTemplate.js";

//Delete book  then click loadAllBooks and book is deleted
//Edit book then click loadAllBooks and book is edited 
let onSubmit = {
    'add-form':onCreateSubmit,
    'edit-form':onEditSubmit
}

let table = {
    list: [],
    async load() {
        table.list = await api.getAllBooks();
        update();
    },
    onEdit(id){
        let book = table.list.find(b => b._id == id);
        update(book);
    },
    async onDelete(id){
        let confirmed = confirm('Are you sure you want to delete that book?');
        if(confirmed){
            await api.deleteBook(id);
        }
        
    }
};

document.body.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(e.target)
    onSubmit[e.target.id](formData, e.target);
})

start();

async function start() {
    update();
}


function update(list, bookToEdit) {
    let result = loadBooksNav(table, list, bookToEdit);
    render(result, document.body);
}

async function onCreateSubmit(formData, form){
    let book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.createBook(book);
    form.reset();

}

async function onEditSubmit(formData, form){
    let id = formData.get('_id');
    let book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.updateBook(id, book);
    form.reset();
    update();
}