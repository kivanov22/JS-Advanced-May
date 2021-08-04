import { request } from "../api/jsonRequest.js";

let baseUrl = 'http://localhost:3030/users';

function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUsername(){
    return localStorage.getItem('username');
}

function getUserId(){
    return localStorage.getItem('userId');
}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
}
    


export async function login(user){
    let loginResponse = await request(`${baseUrl}/login`,'Post',user);

    localStorage.setItem('authToken',loginResponse.accessToken);
    localStorage.setItem('userId',loginResponse._id);
    localStorage.setItem('username',loginResponse.username);
}

export async function register(user){
    let registerResponse = await request(`${baseUrl}/register`,'Post',user);
    localStorage.setItem('authToken',registerResponse.accessToken);
    localStorage.setItem('userId',registerResponse._id);
    localStorage.setItem('username',registerResponse.username);
}

async function logout(){
    let result = await request(`${baseUrl}/logout`,'Get',undefined,true,true);
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
    return result;
}

export default {
    getAuthToken,
    getUserId,
    getUsername,
    isLoggedIn,
    login,
    register,
    logout
}