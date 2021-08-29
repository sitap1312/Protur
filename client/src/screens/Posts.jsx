import React from 'react';
import { Link } from 'react-router-dom';


function Posts(props) {
  const { posts } = props;

  return (
    <div>
      {/* <h3>Posts</h3> */}

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post?.id}`}>
            <h3>{post?.placename}</h3>
            <img src={post?.img_url} alt={post?.placename} />
            {/* <p>{post.description}</p> */}
          </Link>
        </div>
      ))}

      <Link to='/posts/new'>
        <button>Create Post</button>
      </Link>

    </div>
  );
};

export default Posts;
