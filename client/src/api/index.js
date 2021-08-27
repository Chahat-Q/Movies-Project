import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url); //fetching posts that we get in the backend
export const createPost = (newPost) => axios.post(url, newPost);