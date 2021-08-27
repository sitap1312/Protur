import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import { getAllComments } from '../services/comments';


function PostDetails(props) {
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState('');

  const { id } = useParams();
  // const { posts } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComment = async () => {
      const commentsData = await getAllComments();
      setPostComments(commentsData);
    };
    fetchComment();
  }, []);


  return (
    <div>
      <div>
        <h3>{post.placename}</h3>
        <img src={post.img_url} />
        <p>{post.description}</p>
      </div>
      {/* <div>
        <h5>{postComments.content}</h5>
      </div> */}
    </div>
  )
};

export default PostDetails;
