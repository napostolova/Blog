const apiUrl = 'http://localhost:4000';

export function register(data) {
    return fetch(`${apiUrl}/api/user/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify(data)
    });
    
}

export function login(data) {
    return fetch(`${apiUrl}/api/user/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify(data)
    });
    
}

export function logout(token) {
    return fetch(`${apiUrl}/api/user/logout`, {
        headers: {
            'X-Authorization': token
        }
    });
    
}