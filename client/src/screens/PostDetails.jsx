import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../services/posts';
import { createComments } from '../services/comments';
import CommentsCreate from '../components/CommentsCreate';
import './PostDetails.css';


function PostDetails(props) {
  const [post, setPost] = useState(null);

  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost();
  }, [id]);

  const handleCommentCreate = async (commentData) => {
    const newComment = await createComments(id, commentData);
    setPost((prevState) => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }))
  }

  return (
    <div>

      <section className="post-det-sec">
        <div className="post-content-det">
          <div className="post-title-det">{post?.placename}</div>
          <br />
          <div className="post-img-det">
            <img src={post?.img_url} alt={post?.placename}/>
          </div>
          
          <br />
          <br />
          <div className="post-det-des">
            <h3>Description: </h3>
            {post?.description}
          </div>
        </div>
        <br />
        <br />
        <section>
          {currentUser?.id === post?.user_id && (
              <div className="post-UD">
                <Link to={`/posts/${post?.id}/edit`}>
                  <button className="UD-btn">Edit Post</button>
                </Link>

                <button className="UD-btn" onClick={() => handleDelete(post.id)}>Delete Post</button>
              </div>
          )}
        </section>

      </section>

      <br />
      <br />

      <section>
        <p style={{color: "chocolate"}}>Comments</p>
      <div className="comm-dsply">
        <ul>
          <li>
          {post?.comments.map((comment) => (
            <p key={comment.id} style={{color: "white"}}>
              {currentUser?.username}:
              {comment.content}
            </p>
          ))}
          </li>
        </ul>
        </div>

        <div>
          <CommentsCreate handleCommentCreate={handleCommentCreate} />
        </div>

      </section>

    </div>
  )
};

export default PostDetails;
