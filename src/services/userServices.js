const apiUrl = 'https://softuni-blog-server.herokuapp.com';

export const register = async (data) => {
    let response = await fetch(`${apiUrl}/api/user/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
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

export const login = async (email, password) => {
    let response = await fetch(`${apiUrl}/api/user/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    if(response.ok) {
        return result;
    } else {
        throw result.message;
    }
     
}

export const logout = (token) => {
    return fetch(`${apiUrl}/api/user/logout`, {
        headers: {
            'X-Authorization': token
        }
    });
  
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuth = () => {
    return Boolean(getUser());
};