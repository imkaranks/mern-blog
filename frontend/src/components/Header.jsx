import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';

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
    <header className='mb-12 flex items-center'>
      <Link to='/' className='cursor-pointer text-inherit font-bold text-2xl'>iBlog</Link>
      <nav className='flex gap-4 items-center flex-1'>
        {
          userInfo?.username ? <div className='flex gap-4 items-center ml-auto'>
            <Link to='/create' className='cursor-pointer text-inherit'>
              <Tooltip title='New Post'>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Tooltip>
            </Link>

            <a onClick={logout} className='cursor-pointer text-inherit'>
              <Tooltip title='Logout'>
                <IconButton>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </a>

            <div className='flex gap-1 items-center'>
              <Avatar sx={{ width: 30, height: 30, fontSize: '0.85rem' }}>{userInfo.username[0]}</Avatar>
              <span className='font-medium'>Hello, {userInfo.username}</span>
            </div>
          </div> : <div className='flex gap-4 items-center ml-auto'>
            <Link to='/login' className='cursor-pointer text-inherit'>Login</Link>
            <Link to='/register' className='cursor-pointer text-inherit'>Register</Link>
          </div>
        }
      </nav>
    </header>
  )
}

export default Header