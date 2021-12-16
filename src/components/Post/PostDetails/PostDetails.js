import {useHistory, useRouteMatch, Link} from 'react-router-dom';

import styles from './PostDetails.module.css';
import usePostState from '../../../hooks/usePostState' ;
import { useAuthContext } from '../../../contexts/AuthContext';
import { deletePost, like} from '../../../services/postServices';

function PostDetails() { 
  const history = useHistory();
  const {params} = useRouteMatch();
 
  const [post, setPost] = usePostState(params.id);

  const {user} = useAuthContext();

  let isOwner = user._id === post.ownerId;
  
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
    console.log('You already liked this post');
  return;
}

   like(post._id, user.accessToken)
      .then(()=> { 
      setPost(post => ({...post, likes: [...post.likes, user._id]}));   
   
   })
   .catch(error => console.log(error))

 }
 const ownerButtons =  <>
            <Link to={`/edit/${post._id}`}  className={styles.edit} >Edit</Link>
            <button className={styles.delete} onClick={onDeleteHandler} >Delete</button>
         </>
       
     return (

        <section className={styles['post-details']}>
            <h1>{post.title}</h1>
            <article className={styles.details}>
            <p className={styles.region}>{post.region}</p>
            <p className={styles.likes}>{post.likes?.length} likes</p>
            </article>
            <article  className={styles['container-image']}>
              <img className={styles['image']} src={post.imageUrl} alt=""/>
            </article>
            <article className={styles['container-text']}>
              {post.description}
            </article>
                  
                 {isOwner 
                       ? ownerButtons
                        : <>  { user.username 
                                ?  <button onClick={likeHandler}  className={styles.like}>Like</button>
                               : <></>
                               }
                         </>  
                 }
          </section>
    )
}

export default PostDetails;