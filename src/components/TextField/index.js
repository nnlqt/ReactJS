import React, {useEffect, useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import { SendButton } from '../Button/sendButton';
import { useInput } from '../../utils/useInput';
import './style.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const  MyTextField = ({ onSendMessage }) => {
  const inputRef = useRef();
  const { value, handleChange, reset } = useInput('');
  
  const handleSubmit = (e) => {
      e.preventDefault();

      onSendMessage({
          id: Date.now(),
          text: value,
      });
      reset();
      }

      useEffect(() => {
        inputRef.current?.focus();
      }, []);

      const mob = useMediaQuery("(max-width:800px)");
      if (mob) {
        return (
        <form id='send' className='TextField__form' noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField 
        ref={inputRef}
        value={value}
        autoFocus={true}
        onChange={handleChange}
        label="Enter your message"
        id="outlined-basic" 
        variant="outlined"
        size='small'
        InputProps = {{ style: {fontSize: '12px'}}}
        InputLabelProps = {{ style: {fontSize: '12px'}}}
        style={{ 
          margin: '0'
        }}/>
        <SendButton />
      </form>
    );
  } else {
    return (
      <form id='send' className='TextField__form' noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField 
        ref={inputRef}
        value={value}
        autoFocus={true}
        onChange={handleChange}
        label="Enter your message"
        id="outlined-basic" 
        variant="outlined"
        size='small'
        style={{ 
          margin: '0'
        }}/>
        <SendButton />
      </form>
    );
  }
}