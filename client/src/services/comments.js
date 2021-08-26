import api from './api-config';

// Get All comments
export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

// Get single comment
export const getComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

// Create comment
export const createComments = async (input) => {
  const resp = await api.post('/comments', input);
  return resp.data;
}

// Update comment
export const updateComments = async (id, input) => {
  const resp = await api.put(`/comments/${id}`, input);
  return resp.data;
}

// Delete comment
export const deleteComments = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
}

// export const addCommentToPost = async (postId, commentId) => {
//   const resp = await api.get(`/posts/${postId}/comments/${commentId}`);
//   return resp.data;
// }