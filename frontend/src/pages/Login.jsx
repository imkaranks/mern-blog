import React, { useState } from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  function handleInput(event) {
    setUser(prevUser => ({
      ...prevUser,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } else {
      alert('Wrong credentials!');
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={handleSubmit} className='login | max-w-md mx-auto'>
      <h1 className='text-center text-3xl font-bold mb-4'>Login</h1>
      <input className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white' type="text" name="username" id="username" placeholder='Enter your username' value={user.username} onChange={handleInput} />
      <input className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white' type="password" name="password" id="password" placeholder='Enter your password' value={user.password} onChange={handleInput} />
      <button className='w-full bg-[#555] text-white border-none rounded-md p-2' type="submit">Login</button>
    </form>
  )
}

export default Login