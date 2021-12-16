import {useHistory} from 'react-router-dom';
import { useState } from 'react';

import styles from './PostCreate.module.css';
import { create } from "../../../services/postServices";
import { useAuthContext } from '../../../contexts/AuthContext';
import {patternImage, validatePost} from '../../../utils/validationHandler';

function PostCreate () {
    const history = useHistory();
    const {user } = useAuthContext();
    const [error, setError] = useState({name:'', message: ''}); 
    
    const onCreateHandler = (e) => {
        e.preventDefault()

    let formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl'); 
    const region = formData.get('region'); 
    
    const data = {title, description, imageUrl, region};
    
    if(title.length < 10 || description.length < 10 || imageUrl.length < 10) {
        setError({name: 'invalid form', message: 'All fields are required'})
        return;
    } 
    if(!patternImage.test(imageUrl)) {
        setError({name: 'invalid form', message: 'The image address must begin with http(s)://'})
        return;
    }
  
    create(data, user.accessToken)  
        .then(result => {               
        history.push('/');      
    })
    .catch((error) => {
        let message = error.join('. \n');            
        setError({name: 'invalid form', message: message })
    })
}

  const validationHandler = (e) => {
    let [name, message] = validatePost(e.target)
    setError({name, message});
  }

  return (
        <section className={styles['create-page']}>
            <form id="createForm"  className={styles['create-form']}onSubmit={onCreateHandler}>
            <div className={styles['create-form']}>
            {error.name === 'invalid form' ? <p className={styles['invalid-form']}>{error.message}</p> : ''}
                <div className="brand-logo"></div>
                <h1>Create your post</h1>

                <label htmlFor="title"  className={styles.label}>Title</label>
                <input type="text" id="title" name="title" className={styles.inputFields} onBlur={validationHandler} />
                {error.name === 'title' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="description"  className={styles.label}>Description</label>
                <textarea type="description" id="description" name="description" rows="10" cols="50" className={styles.inputFields} 
                onBlur={validationHandler} />
                {error.name === 'description' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="imageUrl"  className={styles.label}>Image address</label>
                <input type="text" name="imageUrl" id="imageUrl" className={styles.inputFields} onBlur={validationHandler} />
                {error.name === 'imageUrl' ? <p className={styles.error}>{error.message}</p> : ''}

                <label htmlFor="region"  className={styles.label}>Select region</label>
                <select  name="region" id="region" className={styles.inputFields} >
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </select>
                              
                <input className={styles['submit']} type="submit" value="Create Post" />
            </div>
            </form>
        </section>
    ) 
}
export default PostCreate;