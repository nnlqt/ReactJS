import { TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addChatWithFB } from "../../store/chats/actions";
import { useInput } from '../../utils/useInput';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './style.css';

export const AddChat = ({ onAddChat }) => {
    const dispatch = useDispatch();

    const { value, handleChange, reset } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            return;
        }

        dispatch(addChatWithFB(value));
        reset();
    }
    
    const mob = useMediaQuery("(max-width:800px)");
    if (mob) {
    return (
        <form className='AddChat__form' onSubmit={handleSubmit}>
        <h5>Select/create a chat</h5>
        <TextField
                id="outlined-basic"
                label="create chat" 
                variant="outlined"
                size='small'
                color='primary'
                InputProps = {{ style: {fontSize: '12px'}}}
                InputLabelProps = {{ style: {fontSize: '12px'}}}
        onChange={handleChange} value={value} />
        </form>
    )
    } else {
        return (
            <form className='AddChat__form' onSubmit={handleSubmit}>
            <h4>Select/create a chat</h4>
            <TextField
                    id="outlined-basic"
                    label="create chat" 
                    variant="outlined"
                    size='small'
                    color='primary'
            onChange={handleChange} value={value} />
            </form>
        )
    }
}