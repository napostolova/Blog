import styles from './PostDetails.module.css';

import { useState, useEffect } from "react";
import { getById } from "../../services/postServices";

const { useRouteMatch, Link } = require("react-router-dom");

function PostDetails() { 
  const [post, setPost] = useState({});

  const {params} = useRouteMatch();
  console.log(params);
  useEffect(() =>{ 
    getById(params.id)
    .then (result => {
      setPost(result)
    })

  }, [])

    return (

        <section className="post-details">
            <h1>{post.title}</h1>
            <article  className={styles['container-image']}>
              <img className={styles['image']} src={post.imageUrl} alt=""/>
            </article>
            <article>
              {post.description}
            </article>
            <Link to={`/edit/${post._id}`} >Edit</Link>
            <button >Delete</button>
          </section>

    )
}

export default PostDetails;