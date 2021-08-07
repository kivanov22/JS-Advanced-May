import { html } from '../node_modules/lit-html/lit-html.js';
import memeService from '../services/memeService.js';



let detailsTemplate = (meme, isOwner, onDelete) => html`<section id="meme-details">
    <h1>Meme Title: ${meme.title}
    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>
            ${isOwner ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : ''}

        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    let userId = localStorage.getItem('userId');
    let memeId = ctx.params.id;
    let meme = await memeService.getMemeId(memeId);

    let isOwner = userId === meme._ownerId;

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        let confirmDelete = confirm('Are you sure you want to Delete?');

        if (confirmDelete) {
            await memeService.deleteMeme(memeId);
            ctx.page.redirect('/memes');
        }
    }
}