import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/profile/actions';

export const Profile = () => {
    const [value, setValue] = useState('');
    const name = useSelector((state) => state.profile.name);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));
        setValue('');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
    <>
    <h2>This is profile of {name} </h2>
    <form action='' onSubmit={handleSubmit} >
    <input value={value} onChange={handleChange} />
    <button onSubmit={handleSubmit} >Save name</button>
    </form>
    </>
    )
}