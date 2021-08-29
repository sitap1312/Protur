import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to='/'>
        <h1>Protur</h1>
      </Link>

      <Link to='/register'>Register</Link>
      
      {currentUser ? (
        <div>
          <Link to='/'>
            <p>{currentUser.username}</p>
          </Link>
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
          <Link to='/login'>Login</Link>
        )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/posts'>Posts</Link>
          {/* <Link to='/comments'>Comments</Link> */}
        </div>
      )}
      {props.children}
    </header>
  );
};

export default Layout;
