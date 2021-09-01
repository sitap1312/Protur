import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header className="header">
      <div className="main-title">
        <Link to='/' >
        <h1>protur</h1>
      </Link>
      </div>

      {currentUser ? (
        <div className="user-log">

          <button onClick={handleLogout} className="user-out">Logout</button>
          
          <Link to='/user' className="user-name">
            Welcome {currentUser.username}..!
          </Link>
          
        </div>
      ) : (
          <div className="main-log">
            <Link to='/register' className="user-reg">Register</Link>   
            <Link to='/login' className="user-in">Login</Link>
          </div>
          
      )} 
      <hr />
      <div className="tour-feed">
        {currentUser && (
        
        <Link to='/posts'>
          <h2>Tours Feed</h2>
        </Link>
        
      )}
      </div>
      
          {props.children}
      
    </header>
  );
};

export default Layout;
