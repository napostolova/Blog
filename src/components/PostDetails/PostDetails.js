import { useAuthContext } from '../../contexts/AuthContext';
import usePostState from '../../hooks/usePostState';
import styles from './PostDetails.module.css';

const { useRouteMatch, Link } = require("react-router-dom");

function PostDetails() { 
  const {params} = useRouteMatch();
 
  const [post, setPost] = usePostState(params.id);

  const {user} = useAuthContext();

  let isOwner = user._id == post.ownerId;
       
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
                    <button >Delete</button>
                    </>
                  : <>
                    </>
             }
           
          </section>

    )
}

export default PostDetails;