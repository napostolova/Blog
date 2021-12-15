import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';

import styles from './Register.module.css';
import { register } from "../../services/userServices";
import { useAuthContext } from '../../contexts/AuthContext';


function Register () {
    const history = useHistory();
    const {login} = useAuthContext();
    const[error, setError] = useState({name: '', message: ''})


const onRegisterHandler = (e) => {
    e.preventDefault()
    
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
      
    const data = {username, email, password};

    if(username ==''|| email === '' || password == '' || repassword == '') {
        setError({name: 'invalid form', message: 'All fields are required'})
        return;
    } 

    register(data)
        .then(data => {
        login(data);        
        history.push('/');
    })
    .catch((error) =>
    setError({name: 'invalid form', message: 'This email is already registered'}) 
    )

}

const validationUsernameHandler = (e) => {   
    let input = e.target;

   if (input.value == '') {
     return setError({name: input.name, message: 'The username is required'});
    }
   const pattern = /^[a-zA-Z0-9]{5,}$/;
   let isValid = pattern.test(input.value)
   return !isValid ? setError({name: input.name, message: 'The username should be at least 5 symbols, may contain only letters and digits'}) : setError({});
}
const validationEmailHandler = (e) => {   
    let input = e.target;

   if (input.value == '') {
     return setError({name: input.name, message: 'This field is required'});
    }

   const pattern = /^[a-zA-Z0-9\.-]{4,}@[a-z]{3,}\.[a-z]{2,}$/;
   let isValid = pattern.test(input.value)
   return !isValid ? setError({name: input.name, message: 'The email is not valid'}) : setError({});
}
const validationPasswordHandler = (e) => {
    let input = e.target;
    console.log(input.value);
          if (input.value == '') {
            return setError({name: input.name, message: 'The password is required'});
         }

        if (input.value.trim().length < 5) {
        return  setError({name: input.name, message: 'The password should be at least 5 symbols'}) 
           }
           setError({});
}

const validation = (e) => {
    let input = e.target;
   const password = input.parentNode.children[6].value;
   console.log(password);
   if (input.value == '') {
    return setError({name: input.name, message: 'Please confirm your password'});
 }
   if (password !== input.value) {
    return  setError({name: input.name, message: 'Passwords don\'t match'})
   }


}

    return (
        <section className={styles['register-page']}>
            <form id="registerForm"  className={styles['register-form']}onSubmit={onRegisterHandler}>
            <div className={styles['register-form']}>
                <div className="brand-logo"></div>
                {error.name === 'invalid form' ? <p className={styles['invalid-form']}>{error.message}</p> : ''}
                
                <label htmlFor="username"  className={styles.label}>Username:</label>
                <input type="text" id="username" name="username" className={styles.inputFields} onBlur={validationUsernameHandler} />
                {error.name=='username' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="email"  className={styles.label}>Email:</label>
                <input type="email" id="email" name="email" className={styles.inputFields} onBlur={validationEmailHandler} />
                {error.name=='email' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="pass"  className={styles.label}>Password:</label>
                <input type="password" name="password" id="register-password" className={styles.inputFields}  onBlur={validationPasswordHandler}/>
                {error.name=='password' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="repassword"  className={styles.label}>Confirm Password:</label>
                <input type="password" name="repassword" id="repassword" className={styles.inputFields}  onBlur={validation}/>
                {error.name=='repassword' ? <span className={styles.error}>{error.message}</span> : ''}

                <input className={styles['submit']} type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <Link  className={styles.link} to="/login">here</Link></span>
                </p>
            </div>
            </form>
        </section>
    )
    
}
export default Register;