import { request } from "./jsonRequest.js";



let baseUrl = 'http://localhost:3030'


async function getAllBooks() {
    let result = await request(baseUrl + '/data/books?sortBy=_createdOn%20desc');
    return result;
}

async function getBookById(id) {
    let result = await request(baseUrl + '/data/books/' + id);
    return result;
}

async function createBook(book) {
    let result = await request(baseUrl + '/data/books', 'Post', book);
    return result;
}

async function updateBook(id, book) {
    let result = await request(baseUrl + '/data/books/' + id, 'Put', book);
    return result;
}


async function deleteBook(id, book) {
    let result = await request(baseUrl + '/data/books/' + id, 'Delete', book, true);
    return result;
}


async function getMyBooks() {//?? userId
    const userId = localStorage.getItem('userId');
    return await request(baseUrl + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

async function totalBookLikes(bookId){
    
    return await request(baseUrl + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,'Post');
}

async function specificUserLike(bookId){
    const userId = localStorage.getItem('userId');
    
    return await request(baseUrl + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}


export default {
    getAllBooks,
    createBook,
    updateBook,
    getMyBooks,
    deleteBook,
    getBookById,
    totalBookLikes,
    specificUserLike
}