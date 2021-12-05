import {useHistory} from 'react-router-dom';

import styles from './PostCreate.module.css';
import { create } from "../../services/postServices";

function PostCreate () {
    const history = useHistory();

    const token = localStorage.getItem('token');

const onCreateHandler = (e) => {
    e.preventDefault()
    
    const title = e.target.title.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    
    const data = {title, description, imageUrl};

    create(data, token)
    .then(res => res.json())
    .then(data => {
        if(data.message) {
            //todo render errors
            console.log(data.message);
            return new Error();
        }
        history.push('/');
        console.log(data);
       
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

                <input className={styles['submit']} type="submit" value="create" />

            </div>
            </form>
        </section>
    )
    
}
export default PostCreate;