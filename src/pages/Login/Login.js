import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';
import { LoginAction } from '../../Redux/Actions/LoginAction';




const Login = () => {
  const init = {
    username: '',
    password: ''
  }

  const red = useNavigate();
  const [data, setData] = useState(init);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  //const [token, setToken] = useLocalStorage(JSON.parse(localStorage.getItem('token')));
  const handalchange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    });

  }

  const disp = useDispatch();



  //console.log(red);
  const onsubmithandler = async (e) => {
    e.preventDefault();
    //console.log("data");
    const a = await axios.post("https://fakestoreapi.com/auth/login", data);
    const result = await a.data;
    console.log(result.token)
    disp(LoginAction(result.token));
    setToken(result.token);
    red("/");

  }
  return (
    <>
      {token}
      <div className="container">
        <form className="form-signin" onSubmit={onsubmithandler} method="POST">
          <h1 className="form-signin-heading text-muted">Sign In</h1>
          <input type="text" className="form-control" placeholder="Email address" onChange={handalchange} name="username" required />
          <input type="password" className="form-control" placeholder="Password" onChange={handalchange} name="password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign In
          </button>
        </form>
      </div>

    </>
  )
}

export default Login