import {useHistory, useRouteMatch} from 'react-router-dom';
import { useState } from 'react';

import styles from './PostEdit.module.css';
import { update } from "../../../services/postServices";
import usePostState from '../../../hooks/usePostState';
import { useAuthContext } from '../../../contexts/AuthContext';
import {validatePost} from '../../../utils/validationHandler';

function PostEdit () {
    const history = useHistory(); 
    const { params } = useRouteMatch();
    const {user} = useAuthContext();
    const [post, setPost] = usePostState(params.id);
    const [error, setError] = useState({name:'', message: ''}); 
 
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
            let errorMessage = data.message.join('\n')
            setError({name: 'invalid form', message: errorMessage });
            return new Error();
        }
        history.push(`/details/${post._id}`);
    })
    .catch(error=> console.log(error)) 
}

const validationHandler = (e) => {
    let [name, message] = validatePost(e.target)
    setError({name, message});
  }

    return (
        <section className={styles['edit-page']}>
            <form id="editForm"  className={styles['edit-form']}onSubmit={onEditHandler}>
            <div className={styles['edit-form']}>
            {error.name === 'invalid form' ? <p className={styles['invalid-form']}>{error.message}</p> : ''}
                <div className="brand-logo"></div>
                <h1>Edit your post</h1>

                <label htmlFor="title" className={styles.label}>Title</label>
                <input type="text" id="title" name="title" className={styles.inputFields} defaultValue={post.title} onBlur={validationHandler}/>
                {error.name === 'title' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="description" className={styles.label}>Description</label>
                <textarea type="description" id="description" name="description" rows="10" cols="50" className={styles.inputFields}
                 defaultValue={post.description}  onBlur={validationHandler}/>
                {error.name === 'description' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="imageUrl" className={styles.label}>Image</label>
                <input type="text" name="imageUrl" id="imageUrl" className={styles.inputFields} defaultValue={post.imageUrl}  onBlur={validationHandler}/>
                {error.name === 'imageUrl' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="region" className={styles.label}>Select region</label>
                <select  name="region" id="region" value={post.region}  className={styles.inputFields} onChange={onChangeRegion}>
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </select>

                <input className={styles.submit} type="submit" value="edit" />

            </div>
            </form>
        </section>
    )
    
}
export default PostEdit;