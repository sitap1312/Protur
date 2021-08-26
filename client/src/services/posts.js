import api from './api-config';

// Get All Posts
export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

// Get one Post
export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

// Create Post
export const createPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
};

// Update Post
export const updatePost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
};

// Delete Post
export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
};