export const BASE_URL = 'http://localhost:3000';

function check(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
    })
        .then((res)=>{
            check(res);
        })
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        }),
    })
        .then((res)=>{
            check(res);
        })
}

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
    })
        .then((res)=>{
            check(res);
        })
}