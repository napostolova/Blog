import styles from './Header.module.css';

import { Link } from "react-router-dom";
import  { useAuthContext } from '../../contexts/AuthContext';


function Header() {
    const { user } = useAuthContext();
     
        const userLinks = (
            <>
            <li className={styles['nav-item']}>
            <span className={styles['welcome-msg']} > Welcome, {user.username} <i className="far fa-smile"></i></span>
          </li>   
          <li className={styles['nav-item']}>
             <Link to="/posts" className={styles['nav-link']}>All Posts</Link>
          </li>   
          <li className={styles['nav-item']}>
             <Link to="/create" className={styles['nav-link']}>Create Post</Link>
          </li>   
         <li className={styles['nav-item']}>
             <Link to="/my-posts" className={styles['nav-link']}>My Posts</Link>
          </li>
           <li className={styles['nav-item']}>
             <Link to="/logout" className={styles['nav-link']}>Logout</Link>
          </li>  
          </> 
        )

        const guestLinks = (
            <>
                   <li className={styles['nav-item']}>
                       <Link to="/posts" className={styles['nav-link']}>All Posts</Link>
                   </li>   
                   <li className={styles['nav-item']}>
                       <Link to="/login" className={styles['nav-link']}>Login</Link>
                    </li>
                   <li className={styles['nav-item']}>
                       <Link to="/register" className={styles['nav-link']}>Register</Link>
                    </li>    
            </>
        )
               
        return(
        <section className={styles.container}>
            <article className={styles.logo}>
            <Link className={styles.logo} to="/"><h2 className={styles['logo-text']}>Let's travel</h2></Link>
            </article>
           <nav className={styles['navbar']}>
               <ul className={styles['navigation-list']}>

             {user.username
                  ? userLinks
                  : guestLinks
             }       
                                           
               </ul>
           </nav>
        </section>
    )
}
export default Header;