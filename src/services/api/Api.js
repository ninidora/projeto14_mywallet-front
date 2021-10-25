import axios from "axios";

const API_URL = 'http://localhost:4000';


function login(body) {
    const promise = axios.post(API_URL + '/sign-in', body);
    promise.catch(err => {
        if ((err.response.status === 401) || (err.response.status === 400) || (err.response.status === 403)) {
            alert('Usuário/senha incorretos');
        }
    })
    return promise;
};

function signUp(body) {
    const promise = axios.post(API_URL + '/users', body);
    promise.catch(err => alert(err));
    return promise;
}

function getUserTransactions(token) {
    const reqConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const promise = axios.get(API_URL + '/transactions', reqConfig);
    promise.catch(err => alert(err));
    return promise;
}




export { login, signUp, getUserTransactions };