import styles from './PostItem.module.css';
const { Link } = require("react-router-dom");

function PostItem({
  post
})
 {   
    return (

        <section className="catalog-page">
            <h1>{post.title}</h1>
            <article className={styles['container-image']}>
              <img className={styles['image']}src={post.imageUrl} alt="" />
            </article>
            <p className={styles['region']}>{post.region}</p>
         <Link to={`/details/${post._id}`}>Read more</Link>
        </section>

    )
}

export default PostItem;