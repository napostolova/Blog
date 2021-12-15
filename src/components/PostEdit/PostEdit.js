import {useHistory, useRouteMatch} from 'react-router-dom';

import styles from './PostEdit.module.css';
import { update } from "../../services/postServices";
import usePostState from '../../hooks/usePostState';

import { useAuthContext } from '../../contexts/AuthContext';

function PostEdit () {
    const history = useHistory(); 

    const { params } = useRouteMatch();
    const [post, setPost] = usePostState(params.id)

    const {user} = useAuthContext();
 
    const onChangeRegion = (e) => {
        setPost({...post, region: e.target.value})
    }

const onEditHandler = (e) => {
    e.preventDefault()

     let formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl'); 
    const region = formData.get('region'); 
    
    const data = {title, description, imageUrl, region};

    update(post._id, data, user.accessToken)
    .then(res => res.json())
    .then(data => {
        if(data.message) {
            //todo render errors
            console.log(data.message);
            return new Error();
        }
        history.push(`/details/${post._id}`);

    })
    .catch(error=> console.log(error))
 
}

    return (
        <section className={styles['edit-page']}>
            <form id="editForm"  className={styles['edit-form']}onSubmit={onEditHandler}>
            <div className={styles['edit-form']}>
                <div className="brand-logo"></div>
                <h1>Edit Post</h1>

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" placeholder="" defaultValue={post.title} />

                <label htmlFor="description">Description:</label>
                <textarea type="description" id="description" name="description" placeholder="Describe your journey....." defaultValue={post.description}/>

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" defaultValue={post.imageUrl} />

                <label htmlFor="region">Select region:</label>
                <select  name="region" id="region" value={post.region} onChange={onChangeRegion}>
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </select>

                <input className={styles['submit']} type="submit" value="edit" />

            </div>
            </form>
        </section>
    )
    
}
export default PostEdit;