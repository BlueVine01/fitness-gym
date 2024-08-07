import React, { useState } from 'react';
import image from '../assets/login-gym.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const navigate = useNavigate();

  //handle form events 
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  }

  const onSubmit = async (data) => {
    try {
      const result = await fetch("https://goodnessgfc.com.ng/gymserver/customer/authenticate/login_user.php", {
        method: 'POST',
        body: JSON.stringify({
          'username': data.username,
          'password': data.password
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
      const response = await result.json();
      console.log(response);

      if (response.response === true) {
        sessionStorage.setItem('loggedin', response);
        // navigate('/signup', { state: { username: data.username } });
      } else {
        console.warn("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div id="subscription">
      <div className="left-w">
        <h2 className="subscription--heading u-margin-bottom-small">Sign in</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="r-full-relay">
            <label htmlFor="text">Username</label>
            <input
              type="text"
              placeholder='Enter Username'
              style={{ backgroundColor: '#fafafa' }}
              {...register("username", { required: 'Username is required' })}
            />
            {errors.username && <span className='error'>{errors.username.message}</span>}
          </div>

          <div className="r-full-relay input-passwordOne">
            <label htmlFor="password">Password</label>
            <input
              type={(passwordEye === false) ? 'password' : 'text'}
              placeholder='Enter your password'
              {...register("password", { required: 'Password is required' })}
            />
            <div className='password-eye'>
              {(passwordEye === false) ? <IoMdEye onClick={handlePasswordClick} /> : <IoMdEyeOff onClick={handlePasswordClick} />}
            </div>
            {errors.password && <span className='error'>{errors.password.message}</span>}
          </div>

          <p className="forgot">
            <Link to="">
              Forgot Password?
            </Link>
          </p>

          <button type="submit" className="form-btn">
            Sign in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?
          <Link to="/signup" className="signup-link link"> Sign up</Link>
        </p>
      </div>
      <div className="right-w">
        <img src={image} alt="woman in gym" />
      </div>
    </div>
  )
}

export default Login;
