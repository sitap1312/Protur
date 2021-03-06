import React from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import './Posts.css';


function Posts(props) {
  const { posts } = props;

  if (posts.length === 0) {
    return <SyncLoader />;
  }

  return (
    <div>

      <div className='new-post'>
        <Link to='/posts/new'>
          <button className='createpost-btn'>Create Post</button>
        </Link>
      </div>

      <div className='posts'>
        {posts.map((post) => (
          <div key={post.id} className='post-link'>           
            <Link to={`/posts/${post?.id}`}>
              <img className='post-img' src={post?.img_url} alt={post?.placename} />
              <div className='post-overlay'>
                <div className='post-name'>
                  {post?.placename}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Posts;
