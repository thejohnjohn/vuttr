import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Context } from '../components/Context/AuthContext';

import './styles.css'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin } = useContext(Context);
  
  const onSubmit = data => console.log(data.email);

  return (
    <form className='form' onSubmit={handleSubmit(handleLogin)}>
      <input className='input-form' 
        type='email' placeholder='email' {...register('email', {})} />
      <input className='input-form'
        type='password' placeholder='password' {...register('password', {})} />

      <input className='login'
        onClick={(data) => { handleLogin(data) }}
        type='submit' value='Login' />
    </form>
  );
}

export default Login;
