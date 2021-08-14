import { html } from '../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';


let editTemplate = (book, onSubmit) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
        <form id="edit-form" action="#" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" .value=${book.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" .value=${book.description}></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" .value=${book.type}>
                            <option value="Fiction" selected>Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>`;

export async function editPage(ctx) {
    let bookId = ctx.params.id;
    let bookReq = await bookService.getBookById(bookId);
    ctx.render(editTemplate(bookReq, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (!title || !description || !imageUrl) {
            return alert('All fields are required');
        }



        await bookService.updateBook(bookId, { title, description, imageUrl ,type});
        
        ctx.page.redirect(`/details/${bookId}`);

    }

}

