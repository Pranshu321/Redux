import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userslice';

const LogOut = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <div className='logout'>
        <h1> Welcome <span className='username'> {user.name} </span> </h1>
        <button className='logout_btn' onClick={(e) => handlelogout(e)}>
          Logout
        </button>
      </div>
    </>
  )
}

export default LogOut