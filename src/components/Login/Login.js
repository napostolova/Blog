import {Link, useHistory } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Login.module.css';
import * as userService from "../../services/userServices";


function Login () {
 const { login } = useAuthContext();
    const history = useHistory();
    

const onLoginHandler = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);

    let email = formData.get('email')
    let password = formData.get('password');
  

    userService.login(email, password)
       .then((data) => {
         login(data);
        history.push('/');
    })
        .catch(error=> console.log(error))

}

    return (
        <section className={styles['login-page']}>
            <form id="loginForm"  className={styles['login-form']}onSubmit={onLoginHandler}>
            <div className={styles['login-form']}>
                <div className="brand-logo"></div>
                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <input className={styles.submit}   type="submit" value="Login" />

                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </div>
            </form>
        </section>
    )
    
}
export default Login;