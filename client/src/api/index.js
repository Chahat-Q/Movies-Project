import axios from 'axios';

const url = 'https://my-favorite-movie.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url); //fetching posts that we get in the backend
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id , updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);