import React from 'react';
import { Link } from 'react-router-dom';

export const NoChat = () => {
    return(
    <>
    <div> Please select a chat</div>
    <Link to='/chats'>Chats</Link>
    </>
    )
}