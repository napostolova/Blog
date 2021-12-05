const apiUrl = 'http://localhost:4000';

export function create(data, token) {
    return fetch(`${apiUrl}/api/posts`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
            
        },
        body: JSON.stringify(data)
    });
    
}
export function getAll() {
    return fetch(`${apiUrl}/api/posts`)
    .then(res => res.json());
}

export function getById(id) {
    return fetch(`${apiUrl}/api/posts/${id}`)
    .then(res => res.json());
}

export function update(data, token) {
    return fetch(`${apiUrl}/api/posts`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
            
        },
        body: JSON.stringify(data)
    });
    
}