import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, [name]: value
    }));
  };

  return (
    <section className="sign-page">
      <div className="sign-form">

        <div className="sign-title">REGISTER</div>
        <br />
        <br />
        
        <form onSubmit={(e) => { e.preventDefault(); handleRegister(formData); }}>

          <input className="sign-input" type='text' name='username' value={formData.username} onChange={handleChange} placeholder="username" />
          <br />
          <br />

          <input className="sign-input" type='email' name='email' value={formData.email} onChange={handleChange} placeholder="✉ useremail@email.com" />
          <br />
          <br />

          <input className="sign-input" type='password' name='password' value={formData.password} onChange={handleChange} placeholder="🔐 ••••••••••••" />
          <br />
          <br />

          <div>
            <button className="sign-btn" type="submit">SIGN UP</button>
          </div>
          <br />
          <br />

          <div className="sign-text"> Already have an Account.!
            <Link to='/login' className="sign-link">Login</Link>
          </div>
          
          </form>
        </div>
      </section>
  )
};

export default Register;
