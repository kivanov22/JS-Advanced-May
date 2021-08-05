import { request } from "../api/jsonRequest.js";
import { clearUserData, setUserData } from "../utils/utility.js";

let baseUrl = 'http://localhost:3030/users';

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getUsername() {
    return localStorage.getItem('username');//username
}

function getUserId() {
    return localStorage.getItem('userId');
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}



export async function login(user) {
    let loginResponse = await request(`${baseUrl}/login`, 'Post', user);//user
    setUserData(loginResponse);

    return loginResponse;
    // localStorage.setItem('authToken', loginResponse.accessToken);
    // localStorage.setItem('userId', loginResponse._id);
    // localStorage.setItem('username', loginResponse.username);
}

export async function register(user) {//user
    let result = await request(`${baseUrl}/register`, 'Post', user);
    setUserData(result);
    //     localStorage.setItem('authToken', registerResponse.accessToken);
    //     localStorage.setItem('userId', registerResponse._id);
    //     localStorage.setItem('username', registerResponse.username);
    return result;
}

async function logout() {
    let result = await request(`${baseUrl}/logout`, 'Get', undefined, true);
    clearUserData();
    // localStorage.removeItem('username');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('authToken');
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