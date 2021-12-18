import { useEffect, useState } from "react";
import { getMyPostsById } from "../../../services/postServices";
import PostItem from '../PostItem/PostItem';

import { useAuthContext} from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function MyPosts() {

const [posts, setPosts] = useState([]);
const {user } = useAuthContext();
const [loading, setLoading] = useState(Boolean);

useEffect(()=> {
         setLoading(true)
        getMyPostsById(user._id, user.accessToken)
        .then(result => {
          setLoading(false)
          setPosts(result)
        })
        .catch(error => console.log(error)) 
             

},[user._id, user.accessToken])

 let loader = <p>Loading... </p>;
    return (
         <>
            { loading ? loader : '' }
            <section className="my-posts">
            <h1>My Posts</h1>

            { posts.length > 0
                ? posts.map(p => <PostItem key={p._id} post={p}></PostItem>)
                : loading 
                     ? loader
                     : <>
                         <h3 className="no-articles">No posts yet</h3>
                         <Link to='/create'>Create your first post</Link>
                      </>
                  
            }

              </section>
       </>
    )
}
export default MyPosts;