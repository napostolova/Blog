import styles from './Home.module.css';

function Home() {
    return(
        <section className={styles['home-page']}>
            <h1 className={styles.heading}>Welcome to Travel blog</h1>
            <article>
             <p className={styles.text}>Here you can read ideas for travels. Create your registration and share your amazing journeys from all the world.</p>
            <article className={styles['container-image']} >
            <img className={styles.image} src='/assets/world.jpeg' />
            </article> 
            </article> 

        </section>
    )
}
export default Home;