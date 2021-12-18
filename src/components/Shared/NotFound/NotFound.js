import { Link } from 'react-router-dom';
import  styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles['not-found']}>
         <article className={styles['no-content']}>
         <p className={styles.face}><i class="far fa-frown"></i></p>

             <p className={styles.text}>The page doesn't exist or is unavailable.</p>
                <p className={styles['link-home']}>
                    <Link className={styles.link} to="/">Back to home page</Link>
                </p>
         </article>
                
             
        
        </section>
    )
}
export default NotFound;