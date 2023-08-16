import React, { useState } from 'react'

function Register() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  function handleInput(event) {
    setUser(prevUser => ({
      ...prevUser,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/user/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    }).then(raw => raw.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} className='register | max-w-md mx-auto'>
      <h1 className='text-center text-3xl font-bold mb-4'>Register</h1>
      <input className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white' type="text" name="username" id="username" placeholder='Enter your username' value={user.username} onChange={handleInput} />
      <input className='block mb-1.5 w-full p-2 border-2 border-[#ddd] rounded-md bg-white' type="password" name="password" id="password" placeholder='Enter your password' value={user.password} onChange={handleInput} />
      <button className='w-full bg-[#555] text-white border-none rounded-md p-2' type="submit">Register</button>
    </form>
  )
}

export default Register