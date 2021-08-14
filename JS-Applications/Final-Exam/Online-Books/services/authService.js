import { request } from "./jsonRequest.js";



let baseUrl = 'http://localhost:3030/users';
function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

export async function login(email, password) {
    let result = await request(`${baseUrl}/login`, 'Post', { email, password });
    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
     localStorage.setItem('userId', result._id);

    return result;
}

export async function register( email, password) {
    let result = await request(`${baseUrl}/register`, 'Post', {  email, password });
    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    return result;
}

export async function logout() {
    let result = await request(`${baseUrl}/logout`, 'Get', undefined, true);
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    return result;
}

export default {
    login,
    register,
    logout,
    isLoggedIn,
}