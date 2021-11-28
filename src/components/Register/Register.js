import {Link} from 'react-router-dom';

import styles from './Register.module.css';
import { register } from "../../services/userServices";

function Register () {

const onRegisterHandler = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;

    const data = {email, password, repassword};

    register(data)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error=> console.log(error))

}

    return (
        <section className={styles['register-page']}>
            <form id="registerForm"  className={styles['register-form']}onSubmit={onRegisterHandler}>
            <div className="container"  className={styles['register-form']}>
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="repassword">Confirm Password:</label>
                <input type="password" name="repassword" id="repassword" />

                <input className={styles['submit']} type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <Link to="/login">here</Link></span>
                </p>
            </div>
            </form>
        </section>
    )
    
}
export default Register;