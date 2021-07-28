import { jsonRequest } from "../api/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/catalog';
//get all furnitures
async function getAll(){
    let result = await jsonRequest(baseUrl);
    return result;
}
//get a specific furniture
async function get(id){
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}

async function create(item){
    //                 method  item we want to create, isAuthorized true we are logged
    let result = await jsonRequest(`${baseUrl}`, 'Post', item, true);
    return result;
}

async function update(item, id){//edit a specific item
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Put', item, true);
    return result;
}
//deleting an item we are authorized because its ours 
async function deleteItem(id){
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}

async function getMyFurniture(userId){
    let result = await jsonRequest(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return result;
}

export default {
    getAll,
    get,
    create,
    update,
    deleteItem,
    getMyFurniture
}