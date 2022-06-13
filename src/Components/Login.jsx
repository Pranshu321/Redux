import React, { useState } from 'react'
import { login } from '../features/userslice';
import {useDispatch} from 'react-redux'

const Login = () => {
    const [name , setname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");

    const dispatch = useDispatch();
   
    const handleSubmit = (e)=>{
      e.preventDefault();
    
    
    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true
    }));
  };

  return (
    <>
      <div className='login'>
        <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>Login Here ⭐</h1>
            <input type="text" placeholder='Name'  value={name} 
              onChange= {(e)=> setname(e.target.value)}
            />
            <input type="email" placeholder='Email' value={email}
            onChange= {(e)=> setemail(e.target.value)}
             />
            <input type="password" placeholder='Password' value={password} 
            onChange= {(e)=> setpassword(e.target.value)}

            />
            <button type='submit' className='submit_btn'>
                Submit
            </button>
        </form>
      </div>
    </>
  )
}

export default Login
