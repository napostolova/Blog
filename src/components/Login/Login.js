import {Link } from 'react-router-dom';

import styles from './Login.module.css';
import { login } from "../../services/userServices";

function Login () {

const onLoginHandler = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const data = {email, password};

    login(data)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error=> console.log(error))

}

    return (
        <section className={styles['login-page']}>
            <form id="loginForm"  className={styles['login-form']}onSubmit={onLoginHandler}>
            <div className="container"  className={styles['login-form']}>
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