import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';


export default function Callback ({data}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className='Callback-button-container'>
        <button className='Callback-button' onClick={handleToggle}><span className="material-symbols-outlined">phone_callback</span>
        {data.header.callback.text}</button>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
       <div className='Callback-container'>
        <div className='Callback-inner-button-container'>
          <button className='Callback-inner-button' onClick={handleClose}><span className="material-symbols-outlined">close</span></button>
        </div>
        <p className='Callback-text'>{data.header.callback.header}</p>
        <p className='Callback-text'>{data.header.callback.message}</p>
        <div className='Callback-textfield-container'>
          <input className='Callback-textfield' placeholder={data.header.callback.nameText}></input>
          <input className='Callback-textfield' placeholder={data.header.callback.phoneText}></input>
        </div>
        <button className='Callback-inner-button Callback-submit-button' onClick={handleClose}><span>{data.header.callback.buttonText}</span>
        <span className="material-symbols-outlined">arrow_forward_ios</span></button>
        <p className='Callback-text'>{data.header.callback.dataMessage}</p>
       </div>
      </Backdrop>
    </div>
  );
}