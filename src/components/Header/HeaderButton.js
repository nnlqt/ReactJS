import { Button } from '@material-ui/core';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';



export const HeaderButton = ({icon, text, onClick}) => {
const mob = useMediaQuery("(max-width:600px)");

if (mob) {

    return (
        <Button
        onClick={onClick}
        variant="outlined"
        color='primary'
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#eee',
            fontSize: '14px',
            textTransform: 'inherit',
            width: '130px',
            height: '40px',
        }} 
        > <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        }}>
            {icon}{text}
            </div>
        </Button>
    )

} else {

    return (
        <Button
        onClick={onClick}
        variant="outlined"
        color='primary'
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#eee',
            fontSize: '17px',
            textTransform: 'inherit',
            width: '150px',
            height: '40px',
        }} 
        > <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }}>
            {icon}{text}
            </div>
        </Button>
    )
}
}