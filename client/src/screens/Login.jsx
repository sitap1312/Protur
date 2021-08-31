import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="sign-page">
      <div className="sign-form">
        <div className="sign-title">WELCOME BACK!</div>
        <br />
        <br />
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(formData); }}>

          <input className="sign-input" type='text' name='username' value={formData.username} onChange={handleChange} placeholder="username" />
          <br />
          <br />

          <input className="sign-input" type='password' name='password' value={formData.password} onChange={handleChange} placeholder="🔐 ••••••••••••" />
          <br />
          <br />

          <div>
            <button className="sign-btn" type="submit">LOGIN</button>
          </div>
          <br />
          <br />

          <div className="sign-text"> Do not have an Account?
          <Link to='/register' className="sign-link" > Register</Link>
          </div>

        </form>
      </div>
    </section>
    
  )
};

export default Login;
