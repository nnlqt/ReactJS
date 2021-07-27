import React, { useState } from 'react';
import { AUTHORS } from '../../constants';

export const Form = ({onSendMessage}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return (
        <form className='App-form' onSubmit={handleSubmit}>
            <input className='App-input' type='text' value={value} onChange={handleChange} />
            <input className='App-submit' type='submit' />
        </form>
    )
}