import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/user/profile', {
      credentials: 'include',
    }).then(raw => raw.json())
    .then(userInfo => setUserInfo(userInfo))
    .catch(error => console.log(error));
  }, []);

  function logout() {
    fetch('http://localhost:3000/api/v1/user/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setUserInfo(null);
  }

  return (
    <header className='mb-12 flex items-center justify-between'>
      <Link to='/' className='cursor-pointer text-inherit font-bold text-2xl'>iBlog</Link>
      <nav className='flex gap-4 items-center'>
        {
          userInfo?.username ? <>
            <Link to='/create' className='cursor-pointer text-inherit'>Create new post</Link>
            <a onClick={logout} className='cursor-pointer text-inherit'>Logout</a>
            <span>Hello, {userInfo.username}</span>
          </> : <>
            <Link to='/login' className='cursor-pointer text-inherit'>Login</Link>
            <Link to='/register' className='cursor-pointer text-inherit'>Register</Link>
          </>
        }
      </nav>
    </header>
  )
}

export default Header