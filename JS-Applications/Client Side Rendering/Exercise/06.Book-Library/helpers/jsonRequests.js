//function skeleton
async function request(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const url = 'http://localhost:3030/jsonstore/collections/books';

//load all books
async function getAllBooks() {
    return Object.entries(await request(url)).map(([key, value]) => Object.assign(value, { _id: key }));
}
//get specific Book
async function getBookId() {
    return await request(url + '/' + id);
}

//createBook
async function createBook(book) {
    return await request(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'Post',
        body: JSON.stringify(book)
    });
}

async function updateBook(id, book) {
    return await request(url + '/' + id, {
        headers: { 'Content-Type': 'application/json' },
        method: 'Put',
        body: JSON.stringify(book)
    });
}

async function deleteBook(id){
    return await request(url +'/' + id,{
        method:'Delete'
    })
}

export {
    getAllBooks,
    getBookId,
    createBook,
    updateBook,
    deleteBook
}