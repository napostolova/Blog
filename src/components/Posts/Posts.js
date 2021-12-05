import { useEffect, useState } from "react";
import { getAll } from "../../services/postServices";

import PostItem  from "../PostItem/PostItem";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAll()
        .then( result => {
            setPosts(result)
        });
    }, [])
    
    return (

        <section className="catalog-page">
            <h1>All Posts</h1>

            {posts.length > 0
            ? posts.map(p => <PostItem key={p._id} post={p}></PostItem>)
            : <h3 className="no-articles">No posts yet</h3>
        }

        </section>

    )
}

export default Posts;