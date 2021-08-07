import { request } from "./jsonRequest.js";


let baseUrl = 'http://localhost:3030'


async function getAllMemes() {
    let result = await request(baseUrl + '/data/memes?sortBy=_createdOn%20desc');
    return result;
}

async function getMemeId(id) {
    let result = await request(baseUrl + '/data/memes/' + id);
    return result;
}

async function createMeme(meme) {
    let result = await request(baseUrl + '/data/memes', 'Post', meme);
    return result;
}

async function updateMeme(id, meme) {
    let result = await request(baseUrl + '/data/memes/' + id, 'Put', meme);//true
    return result;
}


async function deleteMeme(id, meme) {
    let result = await request(baseUrl + '/data/memes/' + id, 'Delete', meme, true);
    return result;
}


async function getMyMemes() {
    const userId = localStorage.getItem('userId');
    return await request(baseUrl + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}



export default {
    getAllMemes,
    getMyMemes,
    getMemeId,
    createMeme,
    updateMeme,
    deleteMeme,
    getMyMemes,
}