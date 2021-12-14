import {useHistory, useRouteMatch, Link} from 'react-router-dom';

import usePostState from '../../hooks/usePostState' ;

import { useAuthContext } from '../../contexts/AuthContext';
import styles from './PostDetails.module.css';
import { deletePost} from '../../services/postServices';


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

            { isOwner 
                  ?  <>
                   <Link to={`/edit/${post._id}`} >Edit</Link>
                    <button onClick={onDeleteHandler} >Delete</button>
                    </>
                  : <>
                    </>
             }
           
          </section>

    )
}

export default PostDetails;