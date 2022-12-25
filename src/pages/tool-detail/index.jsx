import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';

const ToolDetail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='detail-form' onSubmit={handleSubmit(onSubmit)}>
      <input className='input-detail on-off-input' 
        type='text' placeholder='title' {...register('title', {})} />
      <input className='input-detail on-off-input' 
        type='text' placeholder='link' {...register('link', {})} />
      <input className='input-detail on-off-input' 
        type='text' placeholder='description' {...register('description', {})} />
      <input className='input-detail on-off-input' 
        type='text' placeholder='tags' {...register('tags', {})} />
      <input className='login'
        type='submit' value='Ok' />
    </form>
  );
}

export default ToolDetail;
