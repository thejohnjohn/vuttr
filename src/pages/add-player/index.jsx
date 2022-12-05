import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';

const AddPlayer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input className='input-form' 
        type='text' placeholder='title' {...register('title', {})} />
      <input className='input-form' 
        type='text' placeholder='link' {...register('link', {})} />
      <input className='input-form' 
        type='text' placeholder='description' {...register('description', {})} />
      <input className='input-form' 
        type='text' placeholder='tags' {...register('tags', {})} />
      <input className='login'
        type='submit' value='AddPlayer' />
    </form>
  );
}

export default AddPlayer;