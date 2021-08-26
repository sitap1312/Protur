import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = (props) => {
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
      )};
      <hr />
      {currentUser && (
        <div>
          <Link to='/posts'>Foods</Link>
          <Link to='/comments'>Flavors</Link>
        </div>
      )}
      {props.children}
    </header>
  );
};
