import styles from './Header.module.css';

import { Link, useHistory  } from "react-router-dom";

import { logout } from '../../services/userServices';
function Header() {
    const history = useHistory();




    const onLogoutHandler = (e) => {
        e.preventDefault();

        logout()
        .then( 
        localStorage.removeItem('token'),
        localStorage.removeItem('_id'),
        localStorage.removeItem('username'),
        
        history.push('/')    
      
        )
    }
  const userLinks =
           <>
               <li className={styles['nav-item']}>
                  <span className={styles['welcome-msg']} > Welcome, {user} <i class="far fa-smile"></i></span>
                </li>   
                <li className={styles['nav-item']}>
                   <Link to="/" className={styles['nav-link']}>All Posts</Link>
                </li>   
                <li className={styles['nav-item']}>
                   <Link to="/create" className={styles['nav-link']}>Create Post</Link>
                </li>   
               <li className={styles['nav-item']}>
                   <Link to="/my-posts" className={styles['nav-link']}>My Posts</Link>
                </li>
                 <li className={styles['nav-item']}>
                   <Link to="/logout" onClick={onLogoutHandler} className={styles['nav-link']}>Logout</Link>
                </li>   
           </> 

  const guestLinks =
            <>
                    <li className={styles['nav-item']}>
                       <Link to="/login" className={styles['nav-link']}>Login</Link>
                    </li>
                   <li className={styles['nav-item']}>
                       <Link to="/register" className={styles['nav-link']}>Register</Link>
                    </li>
            </>
    return(
        <section className={styles.container}>
            <article className={styles.logo}>
            <Link className={styles.logo} to="/"><h2>Travel Blog<em>.</em></h2></Link>
            </article>
           <nav className={styles['navbar']}>
               <ul className={styles['navigation-list']}>
                  
             {  userLinks  }
             {guestLinks}
                   
                   
               </ul>
           </nav>
        </section>
    )
}
export default Header;