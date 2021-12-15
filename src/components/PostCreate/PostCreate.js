import {useHistory} from 'react-router-dom';

import styles from './PostCreate.module.css';
import { create } from "../../services/postServices";

import { useAuthContext } from '../../contexts/AuthContext';

function PostCreate () {
    const history = useHistory();

    const {user } = useAuthContext();
    

const onCreateHandler = (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl'); 
    const region = formData.get('region'); 
    
    const data = {title, description, imageUrl, region};

    create(data, user.accessToken)
    .then(res => res.json())
    .then(data => {
        if(data.message) {
            //todo render errors
            console.log(data.message);
            return new Error();
        }
        history.push('/');      
    })
    .catch(error=> console.log(error))

}

    return (
        <section className={styles['create-page']}>
            <form id="createForm"  className={styles['create-form']}onSubmit={onCreateHandler}>
            <div className={styles['create-form']}>
                <div className="brand-logo"></div>
                <h1>Create Post</h1>

                <label htmlFor="username">Title:</label>
                <input type="text" id="title" name="title" placeholder="" />

                <label htmlFor="description">Description:</label>
                <textarea type="description" id="description" name="description" placeholder="Describe your journey....." />

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl" />

                <label htmlFor="region">Select region:</label>
                <select  name="region" id="region" >
                  <option value="asia">Asia</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="europe">Europe</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </select>
                              
                <input className={styles['submit']} type="submit" value="Create your post" />

            </div>
            </form>
        </section>
    )
    
}
export default PostCreate;