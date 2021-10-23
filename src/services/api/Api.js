import axios from "axios";


function login(body) {
    const promise = axios.post('http://localhost:4000/sign-in', body);
    promise.catch(err => {
        if ((err.response.status === 401) || (err.response.status === 400) || (err.response.status === 403)) {
            alert('Usuário/senha incorretos');
        }
    })
    return promise;
};




export { login };