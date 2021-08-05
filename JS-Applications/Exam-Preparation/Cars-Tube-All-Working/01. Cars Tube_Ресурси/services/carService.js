import { request } from "../api/jsonRequest.js";


let baseUrl = 'http://localhost:3030'
let getallCarUrl = 'http://localhost:3030/data/cars?sortBy=_createdOn%20desc'
//fix url different for all

//maybe await before request
// let carOperations = {
//     createCarListing: (item) =>  request(baseUrl,'Post', item, true),
//     getAllCarListings: () =>  request(getallCarUrl),
//     updateCarListing: (item, id) =>  request(`${baseUrl}/${id}`, 'Put', item, true),
//     deleteCarListing: (id) =>  request(`${baseUrl}/${id}`, 'Delete', undefined, true),
//     myCarListings: (userId) =>  request(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`),
//     specificCarListing: (id) =>  request(`${baseUrl}/${id}`),
//     searchCar:(query)=> request(`${baseUrl}/data/cars?where=year%20LIKE%20%22${query}%22`),
// }

// export { carOperations }


 async function getAllListings() {
    let result= await request(getallCarUrl);
    return result;
}

 async function getListingId(id) {
    let result= await request(baseUrl + '/data/cars/'+ id);
    return result;
}

 async function createListing(data) {
    let result = await request(baseUrl + '/data/cars', 'Post', data);
    return result;
}

 async function updateListing(id, data) {
    let result = await request(baseUrl + '/data/cars/' + id, 'Put', data);//true
    return result;
}


 async function deleteListing(id) {
    let result = await request(baseUrl + '/data/cars/' + id, 'Delete', undefined, true);
    return result;
}


 async function getMyListings(userId) {
    return await request(baseUrl + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

 async function search(query) {
    return await request(baseUrl + `/data/cars?where=year%3D${query}`);
}

export default {
    getAllListings,
    getMyListings,
    getListingId,
    createListing,
    updateListing,
    deleteListing,
    getMyListings,
    search
}