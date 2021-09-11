import { ListItem } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../../store/chats/actions";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ChatItem = ({ id, name }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteChatWithFB(id));
    }

    const mob = useMediaQuery("(max-width:800px)");
    if (mob) {
    return (
        <ListItem
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '10px',
            alignItems: 'center',
            boxShadow: '0px 0px 20px 5px rgb(220 225 250 / 51%)',
            fontSize: '12px'
        }}
        button> 
            <Link className='ChatItem__link' to={`/chats/${id}`}>{name}</Link>
            <Link to='/chats'><DeleteTwoToneIcon style={{color: '#eee', height: '20px', width: '20px'}} onClick={handleDelete} /></Link>
      </ListItem>
    ) 
    } else {
        return (
            <ListItem
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: '10px',
                alignItems: 'center',
                boxShadow: '0px 0px 20px 5px rgb(220 225 250 / 51%)',
                fontSize: '17px',
            }}
            button> 
                <Link className='ChatItem__link' to={`/chats/${id}`}>{name}</Link>
                <Link to='/chats'><DeleteTwoToneIcon style={{color: '#eee'}} onClick={handleDelete} /></Link>
          </ListItem>
        )
    }
}