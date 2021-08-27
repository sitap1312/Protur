import React from 'react';
import { Link } from 'react-router-dom';


function Posts(props) {
  const { posts, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Posts</h3>

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.placename}</h3>
            {/* <img src={post.img_url} />
            <p>{post.description}</p> */}
          </Link>
          
          {currentUser?.id === post.user_id && (
            <div>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit Post</button>
              </Link>

              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
          )}

        </div>
      ))}

      <Link to='/posts/new'>
        <button>Create Post</button>
      </Link>

    </div>
  );
};

export default Posts;
