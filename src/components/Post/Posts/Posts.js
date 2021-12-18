import { useEffect, useState } from "react";
import { getAll } from "../../../services/postServices";

import PostItem  from "../PostItem/PostItem";
import styles from './Posts.module.css';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(Boolean);

    useEffect(() => {
        setLoading(true)
        getAll()
        .then( result => {
            setLoading(false)
            setPosts(result)
        })
        .catch(error => console.log(error))
    }, [])

    let loader = <p>Loading... </p>;
    return (
            <section className={styles["catalog-page"]}>
           
            { posts.length > 0
            ? posts.map(p => <PostItem key={p._id} post={p}></PostItem>)
            : loading ? loader : <h3 className="no-articles">No posts yet</h3>
              }
        </section>
      

    )
}

export default Posts;