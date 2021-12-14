import { useState, useEffect } from 'react'

import {getById} from '../services/postServices';

const usePostState = (id) => {
    const [post, setPost] = useState({});

useEffect(() =>{ 
    getById(id)
     .then (post => {
      setPost(post)
    })

  }, [id])

  return [
      post,
      setPost
  ]
};

export default usePostState;