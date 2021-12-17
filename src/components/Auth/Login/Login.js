import {Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import styles from './Login.module.css';
import * as userService from "../../../services/userServices";
import {validateUser} from '../../../utils/validationHandler';


 function Login () {
   const { login } = useAuthContext();
    const history = useHistory();
    const[error, setError] = useState({name: '', message: ''})

 
const onLoginHandler = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email')
    let password = formData.get('password');

    if(email === '' || password === '') {
        setError({name: 'invalid form', message: 'Email and password are required'})
        return;
    }
  
    userService.login(email, password)
       .then((data) => {
           login(data);
        history.push('/posts');
    })
        .catch(error =>
            setError({name: 'invalid form', message: 'Email or password is invalid'})
        )  

}
  const validationHandler = (e) => {
    let [name, message] = validateUser(e.target)
    setError({name, message});
  }


    return (
        <section className={styles['login-page']}>
            <form id="loginForm"  className={styles['login-form']} onSubmit={onLoginHandler}>
            {error.name === 'invalid form' ? <p className={styles['invalid-form']}>{error.message}</p> : ''}
            <div className={styles['login-form']}>
                <div className="brand-logo"></div>
                
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.inputFields}  onBlur={validationHandler}/>
                {error.name === 'email' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="password" className={styles.label}>Password</label>
                <input type="password" name="password" id="password" className={styles.inputFields}  onBlur={validationHandler} />
                {error.name === 'password' ? <p className={styles.error}>{error.message}</p> : ''}
               
                <input className={styles.submit}   type="submit" value="Login" />

                <p className="field">
                    <span>If you don't have profile click <Link className={styles.link} to="/register">here</Link></span>
                </p>
            </div>
            </form>
        </section>
    )
    
    
}

export default Login;