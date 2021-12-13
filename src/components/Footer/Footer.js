import { Link } from 'react-router-dom';
import  styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
         <ul className={styles['social-icons']}>
                <li className={styles['social-items']}>
                    <Link className={styles.icons}  to="#"><i className="fab fa-facebook-square"></i></Link>
                </li>
                <li className={styles['social-items']}>
                    <Link className={styles.icons} to="#"><i className="fab fa-twitter-square"></i></Link>
                </li>
                <li className={styles['social-items']}>
                    <Link className={styles.icons} to="#"><i className="fab fa-instagram-square"></i></Link>
                </li>
                <li className={styles['social-items']}>
                    <Link className={styles.icons} to="#"><i className="fab fa-linkedin"></i></Link>
                </li>
             </ul>
           <article className="copyright">
            <p>&copy; Travel Blog 2021</p>
           </article>
        </footer>
    )
}
export default Footer;