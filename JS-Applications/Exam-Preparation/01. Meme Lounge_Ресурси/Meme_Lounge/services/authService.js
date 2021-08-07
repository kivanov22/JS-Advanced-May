import { request } from "./jsonRequest.js";


let baseUrl = 'http://localhost:3030/users';

export async function login(email, password) {
    let result = await request(`${baseUrl}/login`, 'Post', { email, password });
    localStorage.setItem('username', result.username);
    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('userGender', result.gender);

    return result;
}

export async function register(username, email, password, gender) {
    let result = await request(`${baseUrl}/register`, 'Post', { username, email, password, gender });
    localStorage.setItem('username', result.username);
    localStorage.setItem('email', result.email);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('userGender', result.gender);
    return result;
}

export async function logout() {
    let result = await request(`${baseUrl}/logout`, 'Get', undefined, true);
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userGender');
    return result;
}

export default {
    login,
    register,
    logout
}