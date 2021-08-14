import { html } from '../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';



let detailsTemplate = (books, isOwner, onDelete) => html`
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${books.title}</h3>
            <p class="type">Type: ${books.type}</p>
            <p class="img"><img src=${books.imageUrl}></p>
            <div class="actions">
    
                ${isOwner ? html` <a class="button" href="/edit/${books._id}">Edit</a>
                <a @click=${onDelete}class="button" href="/home">Delete</a>` : ''}
    
                <div class="likes">
                    <img class="hearts" src=${books.imageUrl}>
                    <span id="total-likes">Likes: ${books.likes}</span>
                </div>
    
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${books.description}</p>
        </div>
    </section>`;

export async function detailsPage(ctx) {
    let userId = localStorage.getItem('userId');
    let bookId = ctx.params.id;

    // let isLoggedIn = authService.isLoggedIn(userId);
    // let notOwner = !userId ===bookReq._ownerId;//auth.getUserId() === movie._ownerId

    //let bookLikes = await bookService.totalBookLikes(bookId);
    // let specificLike = await bookService.specificUserLike(userId);
    let bookReq = await bookService.getBookById(bookId);

    let isOwner = userId === bookReq._ownerId;
    ctx.render(detailsTemplate(bookReq, isOwner, onDelete));

    async function onDelete() {
        let confirmDelete = confirm('Are you sure you want to Delete?');

        if (confirmDelete) {

            await bookService.deleteBook(bookId);
            // ctx.page.redirect('/home');
        }
    }
}





// <${isLoggedIn && notOwner ? html`
//                 <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
//                 <a class="button" href="details/${books._id}">Like</a>` : ''}
