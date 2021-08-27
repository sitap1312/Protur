import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>Protur</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/posts'>Posts</Link>
          <Link to='/comments'>Comments</Link>
        </div>
      )}
      {props.children}
    </header>
  );
};

export default Layout;
