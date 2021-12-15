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

export function getMyPostsById(id, token) {
    return fetch(`${apiUrl}/api/posts/my-posts/${id}`, {
        headers: {
            'X-Authorization': token
        }
    })
    .then(res => res.json());
}

export function getById(id) {
     return fetch(`${apiUrl}/api/posts/${id}`)
    .then(res => res.json());
}

export function update(id, data, token) {
    return fetch(`${apiUrl}/api/posts/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token      
        },
        body: JSON.stringify(data)
    });
    
}

export function like(id, token) {
    return fetch(`${apiUrl}/api/posts/${id}`, {
        method: 'post',
           headers: {  
              'X-Authorization': token
        },
    });
    
}

export function deletePost(id, token) {
    return fetch(`${apiUrl}/api/posts/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}