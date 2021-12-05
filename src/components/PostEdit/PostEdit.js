import {useHistory, useRouteMatch} from 'react-router-dom';
import {useEffect, useState} from 'react';

import styles from './PostEdit.module.css';
import { getById, update } from "../../services/postServices";

function PostEdit () {
    const history = useHistory();
    const [post, setPost] = useState({});
    
    const token = localStorage.getItem('token');

    const {params} = useRouteMatch();
    console.log(params);
    useEffect(() =>{ 
      getById(params.id)
      .then (result => {
        setPost(result)
      })
  
    }, [])

const onEditHandler = (e) => {
    e.preventDefault()
    
    const title = e.target.title.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    
    const data = {title, description, imageUrl};

    update(data, token)
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
        <section className={styles['edit-page']}>
            <form id="editForm"  className={styles['edit-form']}onSubmit={onEditHandler}>
            <div className={styles['edit-form']}>
                <div className="brand-logo"></div>
                <h1>Edit Post</h1>

                <label htmlFor="username">Title:</label>
                <input type="text" id="title" name="title" placeholder="" />

                <label htmlFor="description">Description:</label>
                <textarea type="description" id="description" name="description" placeholder="Describe your journey....."/>

                <label htmlFor="imageUrl">Image:</label>
                <input type="text" name="imageUrl" id="imageUrl"  />

                <input className={styles['submit']} type="submit" value="edit" />

            </div>
            </form>
        </section>
    )
    
}
export default PostEdit;