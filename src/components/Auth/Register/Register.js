import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';

import styles from './Register.module.css';
import { register } from "../../../services/userServices";
import { useAuthContext } from '../../../contexts/AuthContext';
import {validateUser} from '../../../utils/validationHandler';


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

    if(username === ''|| email === '' || password === '' || repassword === '') {
        setError({name: 'invalid form', message: 'All fields are required'})
        return;
    } 
    if (password !== repassword) {
        setError({name: 'repassword', message: 'Passwords don\'t match'});
        return;
     }

    register(data)
        .then(data => {
        login(data);        
        history.push('/posts');
    })
    .catch((error) =>
    setError({name: 'invalid form', message: 'This email is already registered'}) 
    )

}

  const validationHandler = (e) => {
    let [name, message] = validateUser(e.target)
    setError({name, message});
  }
  return (
        <section className={styles['register-page']}>
            <form id="registerForm"  className={styles['register-form']}onSubmit={onRegisterHandler}>
            <div className={styles['register-form']}>
                <div className="brand-logo"></div>
                {error.name === 'invalid form' ? <p className={styles['invalid-form']}>{error.message}</p> : ''}
                
                <label htmlFor="username"  className={styles.label}>Username</label>
                <input type="text" id="username" name="username" className={styles.inputFields} onBlur={validationHandler} />
                {error.name === 'username' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="email"  className={styles.label}>Email</label>
                <input type="email" id="email" name="email" className={styles.inputFields} onBlur={validationHandler} />
                {error.name === 'email' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="password"  className={styles.label}>Password</label>
                <input type="password" name="password" id="register-password" className={styles.inputFields}  onBlur={validationHandler}/>
                {error.name === 'password' ? <span className={styles.error}>{error.message}</span> : ''}

                <label htmlFor="repassword"  className={styles.label}>Confirm Password</label>
                <input type="password" name="repassword" id="repassword" className={styles.inputFields}  onBlur={validationHandler}/>
                {error.name === 'repassword' ? <span className={styles.error}>{error.message}</span> : ''}

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