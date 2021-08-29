import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts';
import { getAllComments } from '../services/comments';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';
import PostDetails from '../screens/PostDetails';
import Posts from '../screens/Posts';
// import Comments from '../screens/Comments';

function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsList = await getAllPosts();
      setPosts(postsList);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments();
      setComments(commentsList);
    };
    fetchComments();
  }, []);

  const handleCreate = async (postForm) => {
    const postData = await createPost(postForm);
    setPosts((prevState) => [...prevState, postData]);
    history.push('/posts');
  };

  const handleUpdate = async (id, postForm) => {
    const postData = await updatePost(id, postForm);
    setPosts((prevState) => prevState.map((post) => {
      return post.id === Number(id) ? postData : post;
    }));
    history.push('/posts');
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post?.id !== id));
    history.push('/posts');
  };


  return (
    <div>
      <Switch>

        {/* <Route path='/posts/:id'>
          <Comments comments={comments} />
        </Route> */}

        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} />
        </Route>

        <Route path='/posts/new'>
          <PostCreate handleCreate={handleCreate} />
        </Route>

        <Route path='/posts/:id'>
          <PostDetails posts={posts} handleDelete={handleDelete} currentUser={currentUser} />
        </Route>

        <Route path='/posts'>
          <Posts posts={posts} />
        </Route>

      </Switch>
    </div>
  )
};

export default MainContainer;
