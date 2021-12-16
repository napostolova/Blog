export const patternImage = /^http(|s):\/\//;
const patternEmail = /^[a-zA-Z0-9.-]{4,}@[a-z]{3,}\.[a-z]{2,}$/;
const patternUsername = /^[a-zA-Z0-9]{5,}$/;

 let name;
 let message;
export const validatePost = (v) => {
     if (v.name === 'title' || v === 'title' ) {
      if(v.value === '' || v.value.length < 10 ) {
       name = v.name;
       message = 'The title must contain at least 10 latin letters';
    }
  }

    if (v.name === 'description' || v === 'description') {
        if (v.value === '' || v.value.length < 10 ) {
        name = v.name;
        message= 'The description must contain at least 10 latin letters';
        }
    }

    if (v.name === 'imageUrl' || v === 'imageUrl') {        
        let isValid = patternImage.test(v.value)
        if (v.value === '' || v.value.length < 10  || !isValid) {
            name = v.name;
            message= 'The image address must begin with http(s)://'; 
        } 
    }

    return [
        name, 
        message
    ]
    
};

export const validateUser = (v) => {
    if (v.name === 'email' || v === 'email' ) {
        let isValid = patternEmail.test(v.value)
        if(v.value === '' || !isValid)  {
         name = v.name;
         message = 'Please insert a valid email';
      }
    }

    if (v.name === 'password' || v === 'password' ) {
        if(v.value === '' || v.value.length < 5 )  {
         name = v.name;
         message = 'The password should be at least 5 symbols';
      } else {
          message= '';
      }
    }

    if (v.name === 'username') {
        let isValid = patternUsername.test(v.value);
        if(v.value.length < 5 || !isValid )  {
            name = v.name;
            message = 'The username should be at least 5 symbols';
         } else {
             message= '';
         }
    }
    if (v.name === 'repassword') {
        const password = v.parentNode.children[6].value;
        if (password !== v.value) {
            name = v.name;
            message =  'Passwords don\'t match';
        }  else {
            message= '';
        }

    }

    return [
        name, 
        message
    ]
}
