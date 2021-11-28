import styles from './Header.module.css';

import { Link  } from "react-router-dom";
function Header() {
    return(
        <section>
           <nav classname={styles['navigation-list']}>
               <ul classname={styles['navigation-list']}>
                   <li className={styles.listItem}><Link to="/" className={styles.listItem}>Home</Link></li>
                   <li className={styles.listItem}><Link to="/login" className={styles.listItem}>Login</Link></li>
                   <li className={styles.listItem}><Link to="/register" className={styles.listItem}>Register</Link></li>
                   <li className={styles.listItem}><Link to="/catalog" className={styles.listItem}>All Posts</Link></li>
               </ul>
           </nav>
        </section>
    )
}
export default Header;