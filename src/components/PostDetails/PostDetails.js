import {useHistory, useRouteMatch, Link} from 'react-router-dom';

import usePostState from '../../hooks/usePostState' ;

import { useAuthContext } from '../../contexts/AuthContext';
import styles from './PostDetails.module.css';
import { deletePost, like} from '../../services/postServices';


function PostDetails() { 
  const history = useHistory();
  const {params} = useRouteMatch();
 
  const [post, setPost] = usePostState(params.id);

  const {user} = useAuthContext();

  let isOwner = user._id === post.ownerId;

  let isLiked = false;



  const onDeleteHandler = () => {
      alert('Are you sure you want to delete this post?');
    
     deletePost(post._id, user.accessToken)
     .then(()=>{
       history.push('/');
     })
    
    .catch(error=> console.log(error))
       }

  
 const likeHandler = () => {
   
  if (post.likes.includes(user._id)) {
   isLiked = true;
    console.log('You already liked this post');
    return;
  }

   like(post._id, user.accessToken)
   .then(()=> { 
     setPost(post => ({...post, likes: [...post.likes, user._id]}));
   
   })
   .catch(error => console.log(error))

 }
       
     return (

        <section className="post-details">
            <h1>{post.title}</h1>
            <p className={styles['region']}>{post.region}</p>
            <article  className={styles['container-image']}>
              <img className={styles['image']} src={post.imageUrl} alt=""/>
            </article>
            <article>
              {post.description}
            </article>
            <span>{post.likes?.length} likes</span>

            { isOwner 
                  ?  <>
                   <Link to={`/edit/${post._id}`} >Edit</Link>
                    <button onClick={onDeleteHandler} >Delete</button>
                    </>
                  : <>
                  <button onClick={likeHandler}>Like</button>
                    </>
             }
           
          </section>

    )
}

export default PostDetails;