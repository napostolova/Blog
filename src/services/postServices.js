const apiUrl = 'https://blog-service.onrender.com';

export async function create(data, token) {
    let response = await fetch(`${apiUrl}/api/posts`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token 
        },
        body: JSON.stringify(data)
    });
      
    let result = await response.json();

    if(response.ok) {
        return result;
    } else {
        throw result.message;
    }
    
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