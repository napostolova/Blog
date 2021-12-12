import { useEffect, useState } from "react";
import { getMyPostsById } from "../../services/postServices";
import PostItem from "../PostItem/PostItem";

function MyPosts() {

const [posts, setPosts] = useState([]);
const id = localStorage.getItem('_id');
const token = localStorage.getItem('token');

useEffect(()=> {
        getMyPostsById(id, token)
        .then(result => {
            setPosts(result)
        })
        .catch() 
            
        
    

},[])

    return (
        <section className="my-posts">
            <h1>My Posts</h1>

            {posts.length > 0
            ? posts.map(p => <PostItem key={p._id} post={p}></PostItem>)
            : <h3 className="no-articles">No posts yet</h3>
        }

        </section>

    )
}
export default MyPosts;