import { html } from '../node_modules/lit-html/lit-html.js';
import { notify } from '../notifications/notifications.js';
import memeService from '../services/memeService.js';

let editTemplate = (meme, onSubmit) => html`
        <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" 
                    .value=${meme.description}></textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`;

export async function editPage(ctx) {
    let memeId = ctx.params.id;
    let meme = await memeService.getMemeId(memeId);
    ctx.render(editTemplate(meme, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let title = formData.get('title').trim();
        let description = formData.get('description').trim();
        let imageUrl = formData.get('imageUrl').trim();

        try {
            if(!title || !description || !imageUrl){
                throw new Error('All fields are required');
            }


            await memeService.updateMeme(memeId, { title ,description, imageUrl });
            
            ctx.page.redirect('/details/' + memeId);

        }catch(err){
            notify(err.message);
        }

        
    }

}
