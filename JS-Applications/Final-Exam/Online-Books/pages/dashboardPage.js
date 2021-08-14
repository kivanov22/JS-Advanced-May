import { html } from '../node_modules/lit-html/lit-html.js';
import bookService from '../services/bookService.js';


let dashboardTemplate = (books) => html`
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    
    <ul class="other-books-list">
       ${books.length==0 ?
       html` <p class="no-books">No books in database!</p>`
       :books.map(bookTemplate)}

        
    </ul>
    
    <!-- <p class="no-books">No books in database!</p> -->
</section>`;

let bookTemplate = (book)=>html`
 <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.img}></p>
            <a class="button" href="/details/${book._id}">Details</a>
        </li>`;

export async function dashboardPage(ctx) {
    // const token = localStorage.getItem('authToken');
    // if (token != null) {
    //     return ctx.page.redirect('/catalog');
    // }
    ctx.navigation();
    let allBooks = await bookService.getAllBooks();
    ctx.render(dashboardTemplate(allBooks));
}