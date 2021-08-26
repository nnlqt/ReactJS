import { ListItem } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const ChatItem = ({ id, name, onDelete}) => {
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <ListItem
        style={{
            backgroundColor: '#9f9999',
            borderRadius: '10px',
            gap: '5px',
            minWidth: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        button> 
            <Link to={`/chats/${id}`}>{name}</Link>
            <div onClick={handleDelete}>deleteChat</div>
      </ListItem>
    )
}