import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import { createComments, getAllComments } from '../services/comments';
import CommentsCreate from '../components/CommentsCreate';


function PostDetails(props) {
  const [post, setPost] = useState(null);
  const [ postComments, setPostComments ] = useState('');

  const { id } = useParams();
  const { currentUser, handleDelete } = props;
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

  const handleCommentCreate = async (commentData) => {
    const newComment = await createComments(id, commentData);
    setPost((prevState) => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }))
  }

  return (
    <div>
      <div>
        <h3>{post?.placename}</h3>
        <img src={post?.img_url} alt={post?.placename}/>
        <p>{post?.description}</p>

        {currentUser?.id === post?.user_id && (
            <div>
              <Link to={`/posts/${post?.id}/edit`}>
                <button>Edit Post</button>
              </Link>

              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
          )}
      </div>
      <div>
        {post?.comments.map((comment) => (
          <p key={comment.id}>{ comment.content }</p>
        ))}
      </div>
      <CommentsCreate handleCommentCreate={handleCommentCreate} />
    </div>
  )
};

export default PostDetails;
