import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import './styles.css';

const DeleteTool = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id='delete-panel'>
      <div className='delete-panel'>
        <span id='delete-panel-title'>Are you sure?</span>
        <div className='button-container'>
          <button id='cancel' >Cancel</button>
          <button id='confirm' >Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTool;
