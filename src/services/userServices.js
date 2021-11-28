const apiUrl = 'http://localhost:3030';

export function register(data) {
    return fetch(`${apiUrl}/users/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify(data)
    });
    
}

export function login(data) {
    return fetch(`${apiUrl}/users/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify(data)
    });
    
}