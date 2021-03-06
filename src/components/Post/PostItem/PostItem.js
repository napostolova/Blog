import styles from './PostItem.module.css';
const { Link } = require("react-router-dom");

function PostItem({
  post
})
 {   
    return (

        <section className={styles['container-post']}>
            <h1>{post.title}</h1>
            <article className={styles['container-image']}>
              <img className={styles['image']}src={post.imageUrl} alt="" />
            </article>
            <p className={styles['region']}>{post.region}</p>
         <Link to={`/details/${post._id}`} className={styles.link}>Details</Link>
        </section>

    )
}

export default PostItem;